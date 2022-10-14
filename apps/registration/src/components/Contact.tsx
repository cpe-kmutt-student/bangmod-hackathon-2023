export const Contact = () => {
    return (
        <section className="h-full py-12">
            <div>
                <div className="w-fit mx-auto mb-8 px-16 py-4 rounded-xl text-2xl text-white font-bold" style="font-size:64px">
                    NEED HELP?
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-8">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png' width={74} height={74}></img>
                    <p className="font-bold text-white lg:text-base" > BANGMOD HACKTHON 2023</p>
                    <p>0945169692  (พี่เจต)</p>
                    <p>0982725713   (พี่ปัน) </p>
                </div>
                <div className="px-4 py-4 text-center font-bold text-white ">
                      <p>ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p> 
                      <p>ชั้น 10 อาคารวิศววัฒนะ 126ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140</p>
                    </div>
            </div>
        </section>
    );
};
