import { useState } from "Preact/compat";

export const namesurename = () => {
  
  const[Tthname, setInput1] = useState('');
  const[Tthmname, setInput2] = useState('');
  const[Tthsname, setInput3] = useState('');

  const[Tname, setInput4] = useState('');
  const[Tmname, setInput5] = useState('');
  const[Tsname, setInput6] = useState('');

  const[S1thname, setInput7] = useState('');
  const[S1thmname, setInput8] = useState('');
  const[S1thsname, setInput9] = useState('');

  const[S1name, setInput10] = useState('');
  const[S1mname, setInput11] = useState('');
  const[S1sname, setInput12] = useState('');

  const[S2thname, setInput13] = useState('');
  const[S2thmname, setInput14] = useState('');
  const[S2thsname, setInput15] = useState('');

  const[S2name, setInput16] = useState('');
  const[S2mname, setInput17] = useState('');
  const[S2sname, setInput18] = useState('');

  const[S3thname, setInput19] = useState('');
  const[S3thmname, setInput20] = useState('');
  const[S3thsname, setInput21] = useState('');

  const[S3name, setInput22] = useState('');
  const[S3mname, setInput23] = useState('');
  const[S3sname, setInput24] = useState('');


  
  
  return (
    <div className="background">
        <div className="headfront">
              <div className="Formof">Form of</div>
              <div className="Hackathon">Hackathon Kmutt</div>
              </div>
              <div className="box">
          
                  <form  className="space-y-6">
                    <label htmlFor="" className="textbox">อาจารย์ที่ปรึกษา</label>
                    <div class="columns-3">                
                      <div>
                        <label htmlFor="" className="textbox">ชื่อจริง (ภาษาไทย)</label>
                        <input type="text" id="title" placeholder="Name" className="textbox" value={Tthname}  
                          onChange={(event:any)=>{ setInput1(event.target.value);
                          console.log(Tthname);}} pattern="[ก-ฮ]{3,}"  required/>
                      </div>
                      <div>
                        <label htmlFor="" className="textbox">ชื่อกลาง (ภาษาไทย)</label>
                        <input type="text" placeholder="Middle name" className="textbox"value={Tthmname} 
                          onChange={(event:any)=>{ setInput2(event.target.value);
                          console.log(Tthmname);}} pattern="[ก-ฮ]{3,}"required/>
                      </div>
                      <div>
                        <label htmlFor="" className="textbox">นามสกุล (ภาษาไทย)</label>
                        <input type="text" placeholder="Surename" className="textbox"value={Tthsname} 
                          onChange={(event:any)=>{ setInput3(event.target.value);
                          console.log(Tthsname);}} pattern="[ก-ฮ]{3,}"required/>
                      </div>
                    </div>  

                    <div class="columns-3">                
                      <div>
                        <label htmlFor="" className="textbox">Firstname</label>
                        <input type="text" id="title" placeholder="Name" className="textbox" value={Tname}  
                          onChange={(event:any)=>{ setInput4(event.target.value);
                          console.log(Tname);}} pattern="[a-zA-Z]{3,}"  required/>
                      </div>
                      <div>
                        <label htmlFor="" className="textbox">Middle name</label>
                        <input type="text" placeholder="Middle name" className="textbox"value={Tmname} 
                          onChange={(event:any)=>{ setInput5(event.target.value);
                          console.log(Tmname);}} pattern="[a-zA-Z]{3,}"required/>
                      </div>
                      <div>
                        <label htmlFor="" className="textbox">Surename</label>
                        <input type="text" placeholder="Surename" className="textbox"value={Tsname} 
                          onChange={(event:any)=>{ setInput6(event.target.value);
                          console.log(Tsname);}} pattern="[a-zA-Z]{3,}"required/>
                      </div>
                    </div>    

                    <label htmlFor="" className="textbox">สมาชิกคนที่1</label>
                    <div class="columns-3">                
                      <div>
                        <label htmlFor="" className="textbox">ชื่อจริง (ภาษาไทย)</label>
                        <input type="text" id="title" placeholder="Name" className="textbox" value={S1thname}  
                          onChange={(event:any)=>{ setInput7(event.target.value);
                          console.log(S1thname);}} pattern="[ก-ฮ]{3,}"  required/>
                      </div>
                      <div>
                        <label htmlFor="" className="textbox">ชื่อกลาง (ภาษาไทย)</label>
                        <input type="text" placeholder="Middle name" className="textbox"value={S1thmname} 
                          onChange={(event:any)=>{ setInput8(event.target.value);
                          console.log(S1thmname);}} pattern="[ก-ฮ]{3,}"required/>
                      </div>

                      <div>
                        <label htmlFor="" className="textbox">นามสกุล (ภาษาไทย)</label>
                        <input type="text" placeholder="Surename" className="textbox"value={S1thsname} 
                          onChange={(event:any)=>{ setInput9(event.target.value);
                          console.log(S1thsname);}} pattern="[ก-ฮ]{3,}"required/>
                      </div>
                    </div>  
                    <div class="columns-3">                
                      <div>
                        <label htmlFor="" className="textbox">Firstname</label>
                        <input type="text" id="title" placeholder="Name" className="textbox" value={S1name}  
                          onChange={(event:any)=>{ setInput10(event.target.value);
                          console.log(S1name);}} pattern="[a-zA-Z]{3,}"  required/>
                      </div>
                      <div>
                        <label htmlFor="" className="textbox">Middle name</label>
                        <input type="text" placeholder="Middle name" className="textbox"value={S1mname} 
                          onChange={(event:any)=>{ setInput11(event.target.value);
                          console.log(S1mname);}} pattern="[a-zA-Z]{3,}"required/>
                      </div>
                      <div>
                        <label htmlFor="" className="textbox">Surename</label>
                        <input type="text" placeholder="Surename" className="textbox"value={S1sname} 
                          onChange={(event:any)=>{ setInput12(event.target.value);
                          console.log(S1sname);}} pattern="[a-zA-Z]{3,}"required/>
                      </div>
                    </div> 
                    <label htmlFor="" className="textbox">สมาชิกคนที่2</label>        
                    <div class="columns-3">                
                      <div>
                        <label htmlFor="" className="textbox">ชื่อจริง (ภาษาไทย)</label>
                        <input type="text" id="title" placeholder="Name" className="textbox" value={S2thname}  
                          onChange={(event:any)=>{ setInput13(event.target.value);
                          console.log(S2thname);}} pattern="[ก-ฮ]{3,}"  required/>
                      </div>
                      <div>
                        <label htmlFor="" className="textbox">ชื่อกลาง (ภาษาไทย)</label>
                        <input type="text" placeholder="Middle name" className="textbox"value={S2thmname} 
                          onChange={(event:any)=>{ setInput14(event.target.value);
                          console.log(S2thmname);}} pattern="[ก-ฮ]{3,}"required/>
                      </div>
                      <div>
                        <label htmlFor="" className="textbox">นามสกุล (ภาษาไทย)</label>
                        <input type="text" placeholder="Surename" className="textbox"value={S2thsname} 
                          onChange={(event:any)=>{ setInput15(event.target.value);
                          console.log(S2thsname);}} pattern="[ก-ฮ]{3,}"required/>
                      </div>
                    </div> 
                    <div class="columns-3">                
                      <div>
                        <label htmlFor="" className="textbox">Firstname</label>
                        <input type="text" id="title" placeholder="Name" className="textbox" value={S2name}  
                          onChange={(event:any)=>{ setInput16(event.target.value);
                          console.log(S2name);}} pattern="[a-zA-Z]{3,}"  required/>
                      </div>
                      <div>
                        <label htmlFor="" className="textbox">Middle name</label>
                        <input type="text" placeholder="Middle name" className="textbox"value={S2mname} 
                          onChange={(event:any)=>{ setInput17(event.target.value);
                          console.log(S2mname);}} pattern="[a-zA-Z]{3,}"required/>
                      </div>
                      <div>
                        <label htmlFor="" className="textbox">Surename</label>
                        <input type="text" placeholder="Surename" className="textbox"value={S2sname} 
                          onChange={(event:any)=>{ setInput18(event.target.value);
                          console.log(S2sname);}} pattern="[a-zA-Z]{3,}"required/>
                      </div>
                    </div>   
                    <label htmlFor="" className="textbox">สมาชิกคนที่3</label>  
                    <div class="columns-3">                
                      <div>
                        <label htmlFor="" className="textbox">ชื่อจริง (ภาษาไทย)</label>
                        <input type="text" id="title" placeholder="Name" className="textbox" value={S3thname}  
                          onChange={(event:any)=>{ setInput19(event.target.value);
                          console.log(S3thname);}} pattern="[ก-ฮ]{3,}"  required/>
                      </div>
                      <div>
                        <label htmlFor="" className="textbox">ชื่อกลาง (ภาษาไทย)</label>
                        <input type="text" placeholder="Middle name" className="textbox"value={S3thmname} 
                          onChange={(event:any)=>{ setInput20(event.target.value);
                          console.log(S3thmname);}} pattern="[ก-ฮ]{3,}"required/>
                      </div>
                      <div>
                        <label htmlFor="" className="textbox">นามสกุล (ภาษาไทย)</label>
                        <input type="text" placeholder="Surename" className="textbox"value={S3thsname} 
                          onChange={(event:any)=>{ setInput21(event.target.value);
                          console.log(S3thsname);}} pattern="[ก-ฮ]{3,}"required/>
                      </div>
                    </div>       
                    <div class="columns-3">                
                      <div>
                        <label htmlFor="" className="textbox">Firstname</label>
                        <input type="text" id="title" placeholder="Name" className="textbox" value={S3name}  
                          onChange={(event:any)=>{ setInput22(event.target.value);
                          console.log(S3name);}} pattern="[a-zA-Z]{3,}"  required/>
                      </div>
                      <div>
                        <label htmlFor="" className="textbox">Middle name</label>
                        <input type="text" placeholder="Middle name" className="textbox"value={S3mname} 
                          onChange={(event:any)=>{ setInput23(event.target.value);
                          console.log(S3mname);}} pattern="[a-zA-Z]{3,}"required/>
                      </div>
                      <div>
                        <label htmlFor="" className="textbox">Surename</label>
                        <input type="text" placeholder="Surename" className="textbox"value={S3sname} 
                          onChange={(event:any)=>{ setInput24(event.target.value);
                          console.log(S3sname);}} pattern="[a-zA-Z]{3,}"required/>
                      </div>
                    </div>                                      

              
                     <div>
                      <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm" type="submit" >submit</button>
                    </div>

                  
                  </form>
              </div>
            
    </div>
  
  );
};
