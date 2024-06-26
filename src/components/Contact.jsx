import theme_pattern from '../assets/theme_pattern.svg';
import mail from '../assets/mail_icon.svg';
import location from '../assets/location_icon.svg';
import call from '../assets/call_icon.svg';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "69f48efb-4f02-4d7c-864b-922646220441");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      e.target.reset();
    }
  };

  return (
    <div id='contact' className='flex flex-col items-center justify-center gap-8 my-10 mx-5 md:mx-20'>
      <div className="relative">
        <h1 className='px-[0px] py-[20px] text-4xl md:text-5xl font-semibold'>Get in Touch</h1>
        <img src={theme_pattern} alt="" className='absolute bottom-0 right-0 -z-10 w-24 md:w-auto'/>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-36">
        <div className="flex flex-col gap-4">
          <h1 className='text-4xl md:text-7xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Let's Talk</h1>
          <p className='max-w-xl text-slate-300 text-base leading-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque tempore, illum autem vel doloremque sed, fuga porro officia dicta ratione quae obcaecati commodi provident ea explicabo expedita veritatis molestiae sunt.</p>
          <div className="flex flex-col gap-7 text-slate-300 text-lg md:text-xl">
            <div className="flex items-center gap-5">
              <img src={mail} alt="" /><p>sumanjagadeesh357@gmail.com</p>
            </div>
            <div className="flex items-center gap-5">
              <img src={call} alt="" /><p>+91 7338048914</p>
            </div>
            <div className="flex items-center gap-5">
              <img src={location} alt="" /><p>Karnataka, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col items-start gap-5 w-full md:w-auto'>
          <label htmlFor="" className='text-slate-300 text-lg md:text-xl font-medium'>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required className='border-none w-full md:w-[700px] h-14 pl-5 rounded bg-slate-800 text-slate-300 font-sans text-lg md:text-xl leading-none'/>
          <label htmlFor="" className='text-slate-300 text-lg md:text-xl font-medium'>Your Email</label>
          <input type="email" placeholder='Enter your Email' name='email' required className='border-none w-full md:w-[700px] h-14 pl-5 rounded bg-slate-800 text-slate-300 font-sans text-lg md:text-xl' />
          <label htmlFor="" className='text-slate-300 text-lg md:text-xl font-medium'>Write your message here</label>
          <textarea name="message" placeholder='Enter your message' rows={4} required className='w-full md:w-[650px] border-none p-6 rounded bg-slate-800 text-slate-300 text-lg md:text-xl'></textarea>
          <button type='submit' className='border-none text-slate-50 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg md:text-2xl py-5 px-14 cursor-pointer mb-12 hover:scale-110 ease-in-out duration-500'>Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;