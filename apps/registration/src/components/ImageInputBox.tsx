import { useRef, useState } from 'preact/compat';

export const ImageInputBox = () => {
    //Upload to server
    const handleUpload = () => {}
    const name = ['หนังสือรับรองของอาจารย์ที่ปรึกษาตัวจริง']
    const [files, setFiles] = useState(null)
    const inputRef:any = useRef(null)
    const handleDragOver = (event:MouseEvent)=>{
        event.preventDefault();
    }
    const handleDrop = (event:any)=>{
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    }
    if(files) return(
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col 
                            justify-start items-start h-60 m-5'>
                            <h1>แนบไฟล์เอกสาร*</h1>
                            <div>
                                <ol>
                                    {Array.from(name).map((name:string, idx) => 
                                        <li className='px-4' key = {idx}>{idx+1}<span>{". "}</span>{name}</li>
                                    )}
                                </ol>
                                </div>
                            </div>
            <div className='flex flex-col 
                        justify-center items-center h-60 border-dashed rounded-3xl border-2 
                        border-violet-500 m-5 hover:border-violet-400 bg-white drop-shadow-lg'>
                <div class='m-5 flex flex-col 
                        justify-center items-center'>
                    <ol>
                        {Array.from(files).map((file:any, idx) => 
                            <li key={idx}>{idx+1}. {file.name}</li>
                        )}
                    </ol>
                <div class='py-2'>
                        <button class='p-2 mr-5 text-white rounded-full border-solid bg-gray-500 hover:bg-red-500 active:bg-red-400
                        focus:outline-none focus:ring focus:ring-red-300'
                        onClick={() => setFiles(null)}>Cancel</button>
                        <button class='p-2 text-white rounded-full border-solid bg-violet-500 hover:bg-violet-600 active:bg-violet-700 
                        focus:outline-none focus:ring focus:ring-violet-300'
                        onClick={handleUpload}>Upload</button>
                </div>
                </div>
            </div>
        </div>
    )
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 bg-violet-300'>
            <div className='flex flex-col 
                        justify-start items-start h-60 m-5'>
                        <h1 className='text-xl text-violet-900 antialiased'>แนบไฟล์เอกสาร*</h1>
                        <div>
                            <ol>
                                {Array.from(name).map((name:string, idx) => 
                                    <li className='px-4 text-violet-900 antialiased text-lg' key = {idx}>{idx+1}<span>{". "}</span>{name}</li>
                                )}
                            </ol>
                            </div>
                        </div>
            {
                !files && (
                        <div className='flex flex-col 
                        justify-center items-center h-60 border-dashed rounded-3xl border-2 
                        border-violet-500 m-5 hover:border-violet-400 bg-white drop-shadow-lg'
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}>
                            <input type='file' multiple accept='.jpg, .pdf, .png' onChange={(event:any)=>{
                                setFiles(event.target.files)
                            }} hidden ref={inputRef}/>
                            <button class='font-bold text-4xl antialiased text-violet-400 hover:text-violet-600'
                            onClick={()=>{
                                inputRef.current.click()
                            }} >+</button>
                        </div>
                )
            }
        </div>
    )
}