
const OnePersonForm = ({ 
    no
  } : {
    no: number
  }) => {
    return (
      <div className="bg-[#FFFFFF20] drop-shadow-lg rounded-[20px]">
        <h1 className='bg-white rounded-t-[20px] px-5 py-4 text-lg'>รายละเอียดสมาชิกคนที่ {no}</h1>

        <form action="" className='my-5 px-6 py-4 text-white'>
          <div className='flex flex-wrap justify-between pb-4'>
            <div className='flex flex-col w-[13%]'>
              <span htmlFor="" className='pl-2 mb-1'>คำนำหน้า</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='คำนำหน้า' />
            </div>
            <div className='flex flex-col w-[27%]'>
              <span htmlFor="" className='pl-2 mb-1'>ชื่อจริง(ภาษาไทย)</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='ชื่อจริง' />
            </div>
            <div className='flex flex-col w-[27%] '>
              <span htmlFor="" className='pl-2 mb-1'>ชื่อกลาง(ภาษาไทย)</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='ชื่อกลาง' />
            </div>
            <div className='flex flex-col w-[27%]'>
              <span htmlFor="" className='pl-2 mb-1'>นามสกุล(ภาษาไทย)</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='นามสกุล' />
            </div>
          </div>

          <div className='flex flex-wrap justify-between pb-4'>
            <div className='flex flex-col w-[13%]'>
              <span htmlFor="" className='pl-2 mb-1'>Prefix</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='Prefix' />
            </div>
            <div className='flex flex-col w-[27%]'>
              <span htmlFor="" className='pl-2 mb-1'>Firstname</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='Firstname' />
            </div>
            <div className='flex flex-col w-[27%] '>
              <span htmlFor="" className='pl-2 mb-1'>Middle Name</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='Middle Name' />
            </div>
            <div className='flex flex-col w-[27%]'>
              <span htmlFor="" className='pl-2 mb-1'>Surname</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='Surname' />
            </div>
          </div>

          <div className='flex flex-wrap justify-between pb-4'>
            <div className='flex flex-col w-[25%]'>
              <span htmlFor="" className='pl-2 mb-1'>ชื่อเล่น(ภาษาไทย)</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='Nickname' />
            </div>
            <div className='flex flex-col w-[20%]'>
              <span htmlFor="" className='pl-2 mb-1'>ระดับชั้น</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='Grade' />
            </div>
            <div className='flex flex-col w-[51%] '>
              <span htmlFor="" className='pl-2 mb-1'>คำคมประจำใจ</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='Cool Qoute' />
            </div>
          </div>

          <div className='flex flex-wrap justify-between pb-4'>
            <div className='flex flex-col w-[30%]'>
              <span htmlFor="" className='pl-2 mb-1'>Email</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='Email' />
            </div>
            <div className='flex flex-col w-[25%]'>
              <span htmlFor="" className='pl-2 mb-1'>เบอร์โทรศัพท์</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='Tel number' />
            </div>
            <div className='flex flex-col w-[41%] '>
              <span htmlFor="" className='pl-2 mb-1'>ID LINE</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='ID LINE' />
            </div>
          </div>

          <div className='flex flex-wrap justify-between pb-4'>
            <div className='flex flex-col w-[49%]'>
              <span htmlFor="" className='pl-2 mb-1'>ประเภทอาหาร</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='เช่น ฮาลาล มังสวิรัติ' />
            </div>
          </div>

          <div className='flex flex-wrap justify-between pb-4'>
            <div className='flex flex-col w-[49%]'>
              <span htmlFor="" className='pl-2 mb-1'>อาหารที่แพ้</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='Food allergy' />
            </div>
            <div className='flex flex-col w-[49%]'>
              <span htmlFor="" className='pl-2 mb-1'>ยาที่แพ้</span>
              <input type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md' placeholder='Drugs allergy' />
            </div>
          </div>

          <div className='flex flex-wrap justify-between pb-4'>
            <div className='flex flex-col w-[100%]'>
              <span htmlFor="" className='pl-2 mb-1'>โรคประจำตัวและวิธีประถมพยาบาลเบื้องต้น</span>
              <textarea type="text" className='text-black pl-2 p-1 rounded-md drop-shadow-md resize-none' placeholder='Medical problems and first-aid' />
            </div>
          </div>
        
          <h1 className='pl-2 text-lg'>แนบไฟล์เอกสาร</h1>
            <h2 className='pl-4 py-4'>1. รูปนักเรียนขนาด 1.5นิ้ว</h2>
            <button className='text-[#B597D1] text-[40px] rounded-md drop-shadow-md bg-white border-2 border-dashed border-[#9F6FCE] w-[50%] min-w-[450px] mx-[25%] min-h-[150px]'>+</button>
            <h2 className='pl-4 py-4'>2. สำเนาบัตรประชาชนผู้เข้าร่วมเฉพาะด้านหน้า หรือบัตรนักเรียนพร้อมลงชื่อสำเนาถูกต้องให้เรียบร้อย</h2>
            <button className='text-[#B597D1] text-[40px] rounded-md drop-shadow-md bg-white border-2 border-dashed border-[#9F6FCE] w-[50%] min-w-[450px] mx-[25%] min-h-[150px]'>+</button>

            <h2 className='pl-4 py-4'>3. ปพ.7 ของผู้เข้าแข่งขันตัวจริง</h2>
            <button className='text-[#B597D1] text-[40px] rounded-md drop-shadow-md bg-white border-2 border-dashed border-[#9F6FCE] w-[50%] min-w-[450px] mx-[25%] min-h-[150px] mb-5'>+</button>

        </form>
      </div>
    );
}

export const StudentsForms = () => {
  return(
    <div className="container min-w-[780px] max-w-[1000px] bg-[#5D298E]">
      <OnePersonForm no={1}/>
      <OnePersonForm no={2}/>
      <OnePersonForm no={3}/>
      {/* <AdvisorForms/> */}
    </div>
    
  );
};
