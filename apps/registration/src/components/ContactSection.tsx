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
    <section ref={ref} id="contact-section" className="h-full py-24 pb-52">
      <div>
        <div className="py-4 text-6xl text-center text-white font-bold mb-12">
          <h1>NEED HELP?</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-24">
          <div className="flex flex-row space-x-4">
            <div className="bg-gray-300 rounded-full p-3">
              <img className="w-18 h-18" src="fb-icon.webp" alt="" />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <div className="text-white font-bold text-xl">BANGMOD HACKATHON 2023</div>
              <a
                className="text-white bg-[#db9116] w-fit px-4 py-1 rounded-lg text-sm"
                href="https://www.facebook.com/BangmodHackathon"
                target="_blank"
              >
                CHAT NOW
              </a>
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            <div className="bg-gray-300 rounded-full p-3">
              <img className="w-18 h-18" src="tel-icon.webp" alt="" />
            </div>
            <div className="flex flex-col justify-center text-white">
              <div className="grid grid-cols-2 gap-2">
                <a href="tel:0945169692">09-4516-9692</a>
                <div>(พี่เจต)</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a href="tel:0982725713">09-8272-5713</a>
                <div>(พี่ปัน)</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a href="tel:0939416441">09-3941-6441</a>
                <div>(พี่เฟรนด์)</div>
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
