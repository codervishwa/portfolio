const Mail = () => {
  return (
    <div className="flex items-center text-textColor gap-8 fixed bottom-32 -right-40 rotate-90">
      <a
        href="mailto:patnamvishwanath007@gmail"
        className="font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out"
      >
        patnamvishwanath007@gmail.com
      </a>
      <hr className="border-[2px] w-40 rounded-full  bg-textColor border-textColor" />
    </div>
  );
};

export default Mail;
