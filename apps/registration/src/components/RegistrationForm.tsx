import {
  defaultStudentFormData,
  StudentForm,
  StudentFormDataWithFile
} from "@/components/StudentForm";
import { defaultAdvisorData, defaultTeamForm, TeamForm, TeamFormDataWithFile } from "@/components/TeamForm";
import { fetch } from '@/utils/Fetch';
import { AdvisorFormData } from 'api-schema';
import { useState } from "preact/hooks";

export type RegistrationFormData = {
  students: StudentFormDataWithFile[],
  team: TeamFormDataWithFile[],
};

export const RegistrationForm = () => {
  const [teamFormData, setTeamFormData] = useState<TeamFormDataWithFile[]>(defaultTeamForm);
  const [advisorFormData, setAdvisorFormData] = useState<AdvisorFormData[]>(defaultAdvisorData);
  const [studentFormsData, setStudentFormsData] = useState<StudentFormDataWithFile[]>(
    Array(3).fill(defaultStudentFormData)
  );

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const team = teamFormData[0];
    const students = studentFormsData
      .slice(0, team.amount || 2)
      .map((student) => {
        delete student.idCardAttachment;
        delete student.pp7Attachment;
        return student;
      });
    const advisor = advisorFormData;
    const payload = { team, students, advisor };

    // TODO: upload files

    fetch
      .post('/input/save', payload)
      .then((response) => {
        // TODO: after save
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="flex w-full flex-col md:mx-12 z-20">
        <RegisterHeader />

        <form onSubmit={handleSubmit}>
          <TeamForm
            data={teamFormData}
            setData={setTeamFormData}
            advisor={advisorFormData}
            setAdvisor={setAdvisorFormData}
          />

          {Array.from(Array(Number(teamFormData[0].amount)).keys()).map((i) => (
            <StudentForm
              data={studentFormsData}
              setData={setStudentFormsData}
              index={i}
            />
          ))}

          <RegisterButton />
        </form>
      </div>
    </div>
  );
};

const RegisterButton = () => {
  return (
    <div className="flex justify-center mb-32">
      <button className="px-4 py-3 rounded-xl bg-black hover:bg-gray-900 text-white drop-shadow-lg">
        ยืนยันการกรอกข้อมูล
      </button>
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
