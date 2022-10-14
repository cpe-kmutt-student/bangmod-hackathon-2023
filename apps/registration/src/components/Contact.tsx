export const Contact = () => {
    return (
        <section className="h-full py-12">
            <div>
                <div className="py-4 text-6xl text-center text-white font-bold">
                    <h1>NEED HELPS?</h1>
                </div>
                <div className="py-12 grid gap-x-20 grid-cols-2">
                    <div className="flex items-center justify-end grid gap-2 grid-cols-2 md:flex">
                        <div className ="md:shrink-0">
                            <img class="object-contain h-24 w-24 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"></img>
                        </div>
                        <div>
                            <p className="font-bold text-white" > BANGMOD HACKTHON 2023</p>
                            <a href="https://www.facebook.com/BangmodHackathon" target="_blank">
                              <button className="text-white bg-[#db9116] px-4 py-1 rounded-lg font-bold text-xs">CHAT NOW</button>
                            </a> 
                        </div>
                    </div>
                    <div className="flex items-center justify-start grid gap-2 grid-cols-2 md:flex">
                        <div className ="md:shrink-0">
                            <img class="object-contain h-24 w-24" src="https://www.clipartmax.com/png/full/2-23363_icon-telephone-png.png"></img>
                        </div>
                        <div className="text-left font-bold text-white">
                            <p className="font-bold">0945169692  (พี่เจต)</p>
                            <p className="font-bold">0982725713   (พี่ปัน) </p>
                        </div>
                    </div>
                </div>
                <div className="px-4 text-center font-bold text-white ">
                      <p>ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p> 
                      <p>ชั้น 10 อาคารวิศววัฒนะ 126ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140</p>
                </div>
            </div>
        </section>
    );
};
