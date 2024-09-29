import React from 'react';

const Contact = () => {
  return (
    <div className='flex justify-center items-center h-full bg-gradient-to-r from-homic to-black text-white'>
      <div className='w-3/4 max-w-[900px] p-8 bg-gradient-to-r from-primary to-secondary rounded-cust shadow-lg'>
        <h1 className='text-4xl mb-6 font-bold'>Contact</h1>
        <div className='flex flex-col gap-4 text-lg'>
          <p>Email: <a href="anshsarfare16@gmail.com" className='text-blue-400'>anshsarfare16@gmail.com</a></p>
          <p className='flex'>Phone: <p className='text-blue-400 '>9136016916</p></p>
          <p>GitHub: <a href="https://github.com/Ansh476" className='text-blue-400' target='_blank' rel="noreferrer">Github/Ansh476</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/ansh-sarfare-24a49a204/" className='text-blue-400' target='_blank' rel="noreferrer">Linkedin/Ansh Sarfare</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
