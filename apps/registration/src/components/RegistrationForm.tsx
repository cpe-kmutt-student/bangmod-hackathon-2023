import { defaultStudentForm, StudentForm } from "@/components/StudentForm";
import { defaultTeamForm, TeamForm } from "@/components/TeamForm";
import { useState } from "preact/hooks";

export const RegistrationForm = () => {
  const [teamFormData, setTeamFormData] = useState<TeamForm>(defaultTeamForm);
  const [studentFormsData, setStudentFormsData] = useState<StudentForm[]>(
    Array.from({ length: 3 }, () => defaultStudentForm)
  );

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const teacher = teamFormData;
    const student = studentFormsData;
    const payload = { teacher, student };

    setTeamFormData(defaultTeamForm);
    setStudentFormsData(Array.from({ length: 3 }, () => defaultStudentForm));

    // TODO: Send payload to backend
    console.log("submitted");
    console.log(payload);
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="m-5 flex w-full flex-col sm:w-5/6 md:w-4/5 lg:w-3/5">

      {/* <div className="m-5 flex w-full flex-col sm:w-4/5 md:w-3/5"> */}
        <RegisterHeader />

        <form onSubmit={handleSubmit}>
          <TeamForm data={teamFormData} setData={setTeamFormData} />

          {Array.from(Array(Number(teamFormData.amount)).keys()).map((i) => (
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
    <div className="flex justify-center">
      <button className="mt-5 flex h-12 w-2/3 items-center justify-center rounded-xl bg-black drop-shadow-lg  md:w-1/5">
        <span className="font-bold text-white">ยืนยันการกรอกข้อมูล</span>
      </button>
    </div>
  );
};

const RegisterHeader = () => {
  return (
    <div className=" flex h-16 w-2/3 self-center rounded-[20px] bg-white bg-opacity-20 drop-shadow-lg md:w-2/5">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white">ลงทะเบียน</h1>
      </div>
    </div>
  );
};
