import { Spinner } from '@/components/Spinner';
import {
  StudentForm,
  StudentFormDataWithFile
} from "@/components/StudentForm";
import { TeamForm, TeamFormDataWithFile } from "@/components/TeamForm";
import { fetch } from '@/utils/Fetch';
import { AdvisorFormData } from 'api-schema';
import { useEffect, useRef, useState } from "preact/hooks";

export type RegistrationFormData = {
  students: StudentFormDataWithFile[],
  team: TeamFormDataWithFile[],
};

export const RegistrationForm = () => {
  const saveButtonRef = useRef<HTMLButtonElement>(null);
  const [autoSaveInterval, setAutoSaveInterval] = useState<NodeJS.Timer>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [teamFormData, setTeamFormData] = useState<TeamFormDataWithFile[]>([]);
  const [advisorFormData, setAdvisorFormData] = useState<AdvisorFormData[]>([]);
  const [studentFormsData, setStudentFormsData] = useState<StudentFormDataWithFile[]>([]);
  
  const runAutoSave = () => {
    const intervalId = setInterval(() => {
      if (!saveButtonRef.current) return;
      saveButtonRef.current.click();
    }, 1000 * 3);
    setAutoSaveInterval(intervalId);
  };

  const stopAutoSave = () => {
    clearInterval(autoSaveInterval);
  };

  useEffect(() => {
    fetch('/input/get')
      .then((response) => {
        if (!response.data.team.isComplete) runAutoSave();
        setTeamFormData([response.data.team]);
        setAdvisorFormData([response.data.advisor]);
        setStudentFormsData(response.data.students);
      })
      .catch((error) => console.error(error));
    return () => stopAutoSave();
  }, []);

  if (teamFormData.length === 0 || advisorFormData.length === 0 || studentFormsData.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center mt-24 text-white">
        <Spinner style="w-12" />
      </div>
    );
  }

  const save = (isComplete: boolean) => {
    setIsEditing(false);

    if (isComplete) {
      stopAutoSave();
      teamFormData[0].isComplete = true;
      setTeamFormData(teamFormData.slice());
    }

    const team = { ...teamFormData[0] };
    delete team.teacherAttachment;
    team.isComplete = isComplete;

    const students = studentFormsData
      .slice(0, team.amount || 2)
      .map((student) => {
        const copiedStudent = { ...student };
        delete copiedStudent.idCardAttachment;
        delete copiedStudent.pp7Attachment;
        return copiedStudent;
      });

    const advisor = advisorFormData[0];
    const payload = { team, students, advisor };

    // TODO: upload files

    fetch
      .post('/input/save', payload)
      .then((response) => {})
      .catch((error) => console.error(error));
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    save(true);
  };

  const handleAutoSave = (e: Event) => {
    e.preventDefault();
    save(false);
  };

  const edit = () => {
    setIsEditing(true);
    teamFormData[0].isComplete = false;
    setTeamFormData(teamFormData.slice());
    runAutoSave();
  };

  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="flex w-full flex-col md:mx-12 z-20">
        <RegisterHeader />

        <form onSubmit={handleAutoSave}>
          <TeamForm
            isComplete={(teamFormData[0].isComplete && !isEditing) || false}
            data={teamFormData}
            setData={setTeamFormData}
            advisor={advisorFormData}
            setAdvisor={setAdvisorFormData}
          />

          {Array.from(Array(Number(teamFormData[0].amount)).keys()).map((i) => (
            <StudentForm
              isComplete={(teamFormData[0].isComplete && !isEditing) || false}
              data={studentFormsData}
              setData={setStudentFormsData}
              index={i}
            />
          ))}

          <div className="flex justify-center mb-32">
            <button ref={saveButtonRef} type="hidden" />

            {teamFormData[0].isComplete && !isEditing
              ?
                <button
                  type="button"
                  onClick={() => edit()}
                  className="px-4 py-3 rounded-xl bg-black hover:bg-gray-900 text-white drop-shadow-lg"
                >
                  แก้ไขข้อมูล
                </button>
              :
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="px-4 py-3 rounded-xl bg-black hover:bg-gray-900 text-white drop-shadow-lg"
                >
                  ยืนยันการกรอกข้อมูล
                </button>
            }
          </div>
        </form>
      </div>
    </div>
  );
};

const RegisterHeader = () => {
  return (
    <div className="flex h-16 w-2/3 self-center rounded-[20px] mt-12 bg-white bg-opacity-20 drop-shadow-lg md:w-2/5">
      <img className="hidden md:block absolute z-10 top-0 left-0 transform -translate-x-12 w-28 blur-[2px]" src="cloud.webp" alt="" />

      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white">ลงทะเบียน</h1>
      </div>
    </div>
  );
};
