type Props = {};
const Footer = (props: Props) => {
  const date = new Date().getFullYear();
  return (
    <div className='flex justify-center items-center bg-slate-950'>
      <span className='text-white'>
        ❮❯ by{" "}
        <a
          className='text-white'
          href='https://github.com/XINAD919/'
          target='__blank'
        >
          Daniel Castaño{" "}
        </a>
      </span>
      <span className='text-white'>{date}</span>
    </div>
  );
};
export default Footer;
