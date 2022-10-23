import { useNavbar } from '@/contexts/NavbarContext';
import useInView from '@/hooks/useInView';
import { useEffect } from 'preact/hooks';

export const ContactSection = () => {
  const { setVisibleSection } = useNavbar();
  const [isVisible, ref] = useInView<HTMLElement>();

  useEffect(() => {
    isVisible && setVisibleSection('contact');
  }, [isVisible]);

  return (
    <section ref={ref} id="contact-section" className="h-screen flex justify-center items-center flex-col py-24 pb-52">
      <div>
        <div className="py-4 text-5xl sm:text-6xl text-center text-white font-bold mb-12">
          <h1 className='whitespace-nowrap'>NEED HELP?</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 ">
          <div className="flex flex-row ">
            <div className="py-3 px-4 md:px-6">
              <img className="border-[10px] rounded-full border-gray-300 w-[6rem] max-w-none" src="fb-icon.webp" alt="" />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <div className="text-white font-bold text-xl">BANGMOD HACKATHON 2023</div>
              <a
                className="text-white bg-[#db9116] w-fit px-4 py-1 mt-2 rounded-lg text-sm"
                href="https://www.facebook.com/BangmodHackathon"
                target="_blank"
              >
                CHAT NOW
              </a>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="py-3 px-4 md:px-6 xl:pl-24">
              <img className="border-[10px] rounded-full border-gray-300 w-[6rem] max-w-none" src="tel-icon.webp" alt="" />
            </div>
            <div className="flex flex-col justify-center text-white">
              <div className="flex">
                <a href="tel:0945169692" className='whitespace-nowrap min-w-auto pr-2'>09-4516-9692</a>
                <span>(พี่เจต)</span>
              </div>
              <div className="flex">
                <a href="tel:0982725713" className='whitespace-nowrap min-w-auto pr-3'>09-8272-5713</a>
                <span>(พี่ปัน)</span>
              </div>
              <div className="flex">
                <a href="tel:0939416441" className='whitespace-nowrap min-w-auto pr-2.5'>09-3941-6441</a>
                <span  className='whitespace-nowrap'>(พี่เฟรนด์)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center font-bold text-white">
          <p>ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
          <p>ชั้น 10 อาคารวิศววัฒนะ 126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
