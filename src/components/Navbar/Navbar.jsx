import Sidebar from '../Sidebar/Sidebar';
import './Navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          JOHNSON A F
        </motion.span>
        <div className="social-links">
          <a href="mailto:johnsonffrancis.a@gmail.com" target='_blank'>
              <img src="/email.png" className='mail' alt="" />
          </a>
          <a href="https://www.linkedin.com/in/johnson-a-f-59a519291" target='_blank'>
            <img src="/linkedin_white.png" alt="" />
          </a>
          <a href="https://github.com/JOHNSON1518" target='_blank'>
            <img src="/github_white.png" className='github' alt="" />
          </a>
          <a href="https://profile.indeed.com/p/johnsona-359hw3b" target='_blank'>
            <img src="/indeed.png" className='indeed' alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar