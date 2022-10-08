import { useRef, useState } from 'preact/compat';

export const ImageInputBox = () => {
    const handleUpload = () => {}
    const name = ["รูปนักเรียนขนาด 1.5 นิ้ว", 
    "สำเนาบัตรประชาชนผู้เข้าร่วมเฉพาะด้านหน้า หรือ บัตรนักเรียนพร้อมลงชื่อสำเนาถูกต้องให้เรียบร้อย", 
    "ปพ.7 ของผู้เข้าแข่งขันตัวจริง"]

    //file in this obj
    const [files, setFiles] = useState(null)

    const inputRef:any = useRef(null)
    const handleDragOver = (event:MouseEvent)=>{
        event.preventDefault()
    }
    const handleDrop = (event:any)=>{
        event.preventDefault()
        setFiles(event.dataTransfer.files)
    }

    if(files){
        Array.from(files).map((file:any, idx) => {
            if(file.type != 'image/png' 
            && file.type != 'image/jpeg' 
            && file.type != 'application/pdf'){
                setFiles(null)
                alert('Invalid file type!')
            }else if(idx > 2){
                setFiles(null)
                alert('Please submit only 3 files.')
            }
        })
    }

    if(files) return(
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col 
                            justify-start items-start h-30 m-5'>
                <h1 className='text-xl text-violet-900 antialiased'>แนบไฟล์เอกสาร*</h1>
                <ul>
                    {Array.from(name).map((name:string, idx) => {
                        if(name != ''){
                            return <li className='px-4 text-violet-900 antialiased text-lg' 
                        key = {idx}>{idx+1}<span>{". "}</span>{name}</li>
                        }}   
                    )}
                 </ul>
            </div>
            <div className='flex flex-col 
                        justify-center items-center h-60 border-dashed rounded-3xl border-2 
                        border-violet-500 m-5 hover:border-violet-400 bg-white drop-shadow-lg'>
                <div class='m-5 flex flex-col 
                        justify-center items-center'>
                    <ul>
                        {Array.from(files).map((file:any, idx) => 
                            <li key={idx}>{idx+1}. {file.name}</li>
                        )}
                    </ul>
                <div class='py-2'>
                        <button class='p-2 mr-5 text-white rounded-full border-solid bg-gray-500 
                        hover:bg-red-500 active:bg-red-400
                        focus:outline-none focus:ring focus:ring-red-300'
                        onClick={() => setFiles(null)}>Cancel</button>
                        <button class='p-2 text-white rounded-full border-solid bg-violet-500 
                        hover:bg-violet-600 active:bg-violet-700 
                        focus:outline-none focus:ring focus:ring-violet-300'
                        onClick={handleUpload}>Upload</button>
                </div>
                </div>
            </div>
        </div>
    )

    return(
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col 
                        justify-start items-start h-30 m-5'>
                <h1 className='text-xl text-violet-900 antialiased'>แนบไฟล์เอกสาร*</h1>
                <ul>
                    {Array.from(name).map((name:string, idx) => {
                        if(name != ''){
                            return <li className='px-4 text-violet-900 antialiased text-lg' 
                        key = {idx}>{idx+1}<span>{". "}</span>{name}</li>
                        }}   
                    )}
                </ul>
            </div>
            {!files && (
                <div className='flex flex-col 
                justify-center items-center h-60 border-dashed rounded-3xl border-2 
                border-violet-500 m-5 hover:border-violet-400 bg-white drop-shadow-lg'
                onDragOver={handleDragOver}
                onDrop={handleDrop}>
                    <input type='file' multiple accept='.jpg, .pdf, .png' onChange={(event: any)=>{
                    setFiles(event.target.files)}} hidden ref={inputRef}/>
                    <button class='font-bold text-4xl antialiased text-violet-400 hover:text-violet-600'
                    onClick={()=>{inputRef.current.click()}} >+</button>
                 </div>
                )
            }
        </div>
    )
}