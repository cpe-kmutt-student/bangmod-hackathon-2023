import { Spinner } from '@/components/Spinner';
import {
  defaultStudentFormData,
  StudentForm,
  StudentFormDataWithFile
} from "@/components/StudentForm";
import { TeamForm, TeamFormDataWithFile } from "@/components/TeamForm";
import { fetch } from '@/utils/Fetch';
import { AdvisorFormData } from '@bmh2023/api-schema';
import { useEffect, useRef, useState } from "preact/hooks";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export type UploadedFile = {
  index: number,
  originalName: string,
  fileType: number,
  url: string,
};

export type RegistrationFormData = {
  students: StudentFormDataWithFile[],
  team: TeamFormDataWithFile[],
};

export const RegistrationForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [needToSave, setNeedToSave] = useState<number>(0);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);
  const [teamFormData, setTeamFormData] = useState<TeamFormDataWithFile[]>([]);
  const [advisorFormData, setAdvisorFormData] = useState<AdvisorFormData[]>([]);
  const [studentFormsData, setStudentFormsData] = useState<StudentFormDataWithFile[]>([]);
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const save = (isComplete: boolean) => {
    setIsEditing(false);

    if (isComplete) {
      teamFormData[0].isComplete = true;
      setTeamFormData(teamFormData.slice());
      setIsFormComplete(isComplete);
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
        delete copiedStudent.selfImageAttachment;
        return copiedStudent;
      });

    const advisor = advisorFormData[0];
    const payload = { team, students, advisor };

    fetch
      .post('/input/save', payload)
      .then(() => {
        if (isComplete) {
          MySwal.fire({
            title: 'บันทึกข้อมูลสำเร็จ',
            text: 'คุณสามารถกลับมาแก้ไขข้อมูลได้จนกว่าจะปิดรับสมัคร',
            icon: 'success',
          })
        }
      })
      .catch((error) => {
        if (!isComplete) return;
        MySwal.fire({
          title: 'บันทึกข้อมูลผิดพลาด',
          text: error.message,
          icon: 'error',
        })
      });
  };

  useEffect(() => {
    let autoSaveIntervalId: NodeJS.Timer;

    fetch('/input/get')
      .then((response) => {
        // Create autosave clock, hacky way!
        autoSaveIntervalId = setInterval(() => {
          setNeedToSave((prev) => prev + 1);
        }, 1000 * 30);

        setTeamFormData([response.data.team]);
        setAdvisorFormData([response.data.advisor]);

        if (response.data.students.length === 0) {
          setStudentFormsData(defaultStudentFormData)
        } else {
          setStudentFormsData(response.data.students);
        }
        
        setIsLoading(false);
      })
      .catch((error) => console.error(error));

    fetch('/file/document')
      .then((response) => setFiles(response.data));

    return () => {
      autoSaveIntervalId && clearInterval(autoSaveIntervalId);
    };
  }, []);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    const isFormValid = formRef.current.checkValidity();
    if (!isFormValid) {
      formRef.current.reportValidity();
      return;
    }

    MySwal.fire({
      title: 'ยืนยันการบันทึกข้อมูล',
      confirmButtonText: 'บันทึก',
      showDenyButton: true,
      denyButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.isConfirmed) {
        save(true);
      }
    });
  };

  const edit = () => {
    setIsEditing(true);
    teamFormData[0].isComplete = false;
    setIsFormComplete(false);
    setTeamFormData(teamFormData.slice());
  };

  const handleFormSubmit = (e: Event) => {
    e.preventDefault();
  };

  useEffect(() => {
    setIsFormComplete(teamFormData[0]?.isComplete || false);
  }, [teamFormData]);

  // Hacky way to update which call from interval
  useEffect(() => {
    if (isLoading || isFormComplete) return;
    save(false);
  }, [needToSave, isFormComplete]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center mt-24 text-white">
        <Spinner style="w-12" />
      </div>
    );
  }

  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="flex w-full flex-col z-20">
        <RegisterHeader />

        <form ref={formRef} onSubmit={handleFormSubmit}>
          <TeamForm
            isComplete={(teamFormData[0].isComplete && !isEditing) || false}
            data={teamFormData}
            setData={setTeamFormData}
            advisor={advisorFormData}
            setAdvisor={setAdvisorFormData}
            files={files}
          />
          {Array.from(Array(Number(teamFormData[0].amount)).keys()).map((i) => (
            <StudentForm
              isComplete={(teamFormData[0].isComplete && !isEditing) || false}
              data={studentFormsData}
              setData={setStudentFormsData}
              index={i}
              files={files}
            />
          ))}

          <div className="flex justify-center mb-32">
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
                  type="submit"
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
