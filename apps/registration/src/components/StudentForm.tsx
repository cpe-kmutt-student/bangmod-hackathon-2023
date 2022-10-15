const LengthValidate = (
  str : string
) => {
  return ( str.length < 3 || str.length > 30 ? false : true) 
}

const TextValidation = (
  str : string,
  lang : 'EN' | 'TH'
) => {
  if(lang === 'EN') {
    return /^[a-zA-Z]+$/.test(str);
  } else if( lang === 'TH') {
    return /^[ก-ฮ]+$/.test(str);
  }
}

const TextInputValidation = (
  text : string,
  lang : 'EN' | 'TH'
) => {
  return (TextValidation(text,lang) && LengthValidate(text) ? true : false);
}

// Style
const GroupWrap = 'flex md:pb-4 flex-col md:flex-row md:justify-between ';

// html components
const InputFile = () => {
  return (
    <div className='flex align-center justify-center'>
      <button className='text-[#B597D1] rounded-md drop-shadow-md bg-white border-2 border-dashed border-[#9F6FCE]
                          w-[80%] mb-4 min-h-[70px] sm:min-h-[100px] max-w-[300px]
                          md:max-w-[450px] md:text-[40px] md:w-[50%] md:min-h-[150px] md:mb-5'>+</button>
    </div>
  );
}

const TextInput = ({
  Label,
  Placeholder,
} : {
  Label: string,
  Placeholder : string,
}) => {
  return ( 
      <>
        <span htmlFor="" className='pl-2 mb-1'>{Label}</span>
        <input type="text" className='text-black p-2 md:pl-2 md:p-1 rounded-md drop-shadow-md' placeholder={Placeholder}/>
      </>
  )
}


const ParticipantForm = ({ 
    no
  } : {
    no: 1 | 2 | 3 // Order of the contestant
  }) => {

    return (
      <div className="bg-[#FFFFFF20] drop-shadow-lg rounded-[20px]">
        <h1 className='bg-white rounded-t-[20px] px-5 py-4 text-lg text-center md:text-left'>รายละเอียดสมาชิกคนที่ {no}</h1>

        <form action="" className='text-white my-5 md:px-6 md:py-4'>
          <div className={GroupWrap}>

            <div className='flex flex-col w-full md:w-[13%] px-4 py-2 md:p-0'> 
              <TextInput Label='คำนำหน้า' Placeholder='คำนำหน้า'/>
            </div>
            <div className='flex flex-col w-full md:w-[27%] px-4 py-2 md:p-0' > 
              <TextInput Label='ชื่อจริง (ภาษาไทย)' Placeholder='ชื่อจริง'/>
            </div>
            <div className='flex flex-col w-full md:w-[27%] px-4 py-2 md:p-0' > 
              <TextInput Label='ชื่อกลาง (ภาษาไทย)' Placeholder='ชื่อกลาง' />
            </div>
            <div className='flex flex-col w-full md:w-[27%] px-4 py-2 md:p-0'> 
              <TextInput Label='นามสกุล (ภาษาไทย)' Placeholder='นามสกุล' />
            </div>
          </div>

          <div className={GroupWrap}>
          <div className='flex flex-col w-full md:w-[13%] px-4 py-2 md:p-0'>
              <TextInput Label='Prefix' Placeholder='Prefix' />
            </div>
            <div className='flex flex-col w-full md:w-[27%] px-4 py-2 md:p-0'>
              <TextInput Label='Firstname' Placeholder='Firstname' />
            </div>
            <div className='flex flex-col w-full md:w-[27%] px-4 py-2 md:p-0'>
              <TextInput Label='Middle Name' Placeholder='Middle Name' />
            </div>
            <div className='flex flex-col w-full md:w-[27%] px-4 py-2 md:p-0'>
              <TextInput Label='Surname' Placeholder='Surname' />
            </div>
            
          </div>

          <div className={GroupWrap}>
            <div className='flex flex-col w-full md:w-[25%] px-4 py-2 md:p-0'>
              <TextInput Label='ชื่อเล่น(ภาษาไทย)' Placeholder='Nickname' />
            </div>
            <div className='flex flex-col w-full md:w-[20%] px-4 py-2 md:p-0'>
              <TextInput Label='ระดับชั้น' Placeholder='Grade'/>
            </div>
            <div className='flex flex-col w-full md:w-[51%] px-4 py-2 md:p-0'>
              <TextInput Label='คำคมประจำใจ' Placeholder='Cool Qoute'/>
            </div>
          </div>

          <div className={GroupWrap}>
            <div className='flex flex-col w-full md:w-[30%] px-4 py-2 md:p-0'>
              <TextInput Label='Email' Placeholder='Email'/>
            </div>
            <div className='flex flex-col w-full md:w-[25%] px-4 py-2 md:p-0'>
              <TextInput Label='เบอร์โทรศัพท์' Placeholder='Tel number'/>
            </div>
            <div className='flex flex-col w-full md:w-[41%] px-4 py-2 md:p-0'>
              <TextInput Label='ID LINE' Placeholder='ID LINE'/></div>
            </div>

          <div className={GroupWrap}>
            <div className='flex flex-col w-full md:w-[49%] px-4 py-2 md:p-0'>
              <TextInput Label='ประเภทอาหาร' Placeholder='เช่น ฮาลาล มังสวิรัติ' />
            </div>
          </div>

          <div className={GroupWrap}>
          
            <div className='flex flex-col w-full md:w-[49%] px-4 py-2 md:p-0'>
              <TextInput Label='อาหารที่แพ้' Placeholder='Food allergy'/>
            </div>
            <div className='flex flex-col w-full md:w-[49%] px-4 py-2 md:p-0'>
              <TextInput Label='ยาที่แพ้' Placeholder='Drugs allergy'/>
            </div>
          </div>

          <div className={GroupWrap}>
            <div className='flex flex-col w-full px-4 py-2 md:p-0'>
              <span htmlFor="" className='pl-2 mb-1'>โรคประจำตัวและวิธีประถมพยาบาลเบื้องต้น</span>
              <textarea type="text" className='text-black p-2 md:pl-2 md:p-1 rounded-md drop-shadow-md resize-none' placeholder='Medical problems and first-aid' />
            </div>
          </div>
        
          <h1 className='pl-6 pt-2 md:pl-2 text-lg'>แนบไฟล์เอกสาร</h1>
            <h2 className='pl-6 pr-4 md:pl-4 md:pr-0 py-4'>1. รูปนักเรียนขนาด 1.5นิ้ว</h2>
            <InputFile/>
            <h2 className='pl-6 pr-4 md:pl-4 md:pr-0 py-4'>2. สำเนาบัตรประชาชนผู้เข้าร่วมเฉพาะด้านหน้า หรือบัตรนักเรียนพร้อมลงชื่อสำเนาถูกต้องให้เรียบร้อย</h2>
            <InputFile/>
            <h2 className='pl-6 pr-4 md:pl-4 md:pr-0 py-4'>3. ปพ.7 ของผู้เข้าแข่งขันตัวจริง</h2>
            <InputFile/>
        </form>
      </div>
    );
}

export const ParticipantsForms = () => {
  return(
    <div className="container md:min-w-[780px] md:max-w-[1000px] bg-[#5D298E]">
      <ParticipantForm no={1}/>
      <ParticipantForm no={2}/>
      <ParticipantForm no={3}/>
      {/* <AdvisorForms/> */}
    </div>
    
  );
};
