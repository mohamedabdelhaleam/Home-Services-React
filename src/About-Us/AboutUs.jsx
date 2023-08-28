import React from 'react';
import './AboutUs.css'
import About from '../components/About/About';
import IntroVideo from '../components/IntroVideo/IntroVideo';
import { Helmet } from 'react-helmet';
import { GrCycle } from 'react-icons/gr';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>
        من نحن | مركز الدكتور احمد أحمد
        </title>
      </Helmet>
      <header className='services-bg h-96 border-b-2 border-[#cdcdcd]'>
        <div className='m-auto max-w-[1280px]'>
            <div className='flex justify-center items-center h-96'>
                <div className='text-center'>
                    <div className='text-xl font-normal'>مركز دكتور مؤمن ندا » من نحن</div>
                    <div className='text-2xl font-semibold'>تعرف على مركز د. مؤمن ندا للرعاية الطبية المنزلية</div>
                    <div className='text-5xl font-bold'>من نحن</div>
                </div>
            </div>
        </div>
      </header>
      <div>
        <div className='m-auto max-w-[1280px] my-16'>
            <About />
        </div>
      </div>
      <div>
        <div className='m-auto max-w-[1280px] my-16 '>
            <IntroVideo />
        </div>
      </div>
      <div>
        <div className='m-auto max-w-[1280px] text-center my-16'>
            <div>لماذا تختار مركز د. مؤمن ندا؟</div>
            <div className='text-center my-4 xs:mx-4 sm:mx-4 md-mx-4'>
                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='text-center w-full text-lg font-medium'>خدمة 24 ساعة في الأسبوع</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                يقدم مركز د. مؤمن ندا خدماتها على مدار 24 ساعة طوال أيام الأسبوع من خلال فريق متفاني هدفه الأول راحة المرضى وذويهم.


                </Typography>
              </AccordionDetails>
            </Accordion>
                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='text-center w-full text-lg font-medium'>أحدث الأجهزة الطبية</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                يوفر مركز د. مؤمن ندا أحدث الأجهزة والمعدات الطبية في المنزل، والتعامل معها من خلال كوادر مُدرَّبة على أعلى مستوى.
                </Typography>
              </AccordionDetails>
            </Accordion>
                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='text-center w-full text-lg font-medium'>تغطية جغرافية واسعة</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                مركز د. مؤمن ندا لديه العديد من الممرضين و الأخصائيين والأطباء المتمركزين فى معظم محافظات مصر.
                </Typography>
              </AccordionDetails>
            </Accordion>
                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='text-center w-full text-lg font-medium'>أنسب أسعار في مصر</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  يقدم مركز د. مؤمن ندا أفضل الأسعار في مصر على جميع خدمات الرعاية الطبية المنزلية بما يتناسب مع كل حالة واحتياجاتها.
                </Typography>
              </AccordionDetails>
            </Accordion>
                  <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='text-center w-full text-lg font-medium'>طاقم طبي متكامل</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>يمتلك مركز د. مؤمن ندا أفضل الكوادر ذوي الخبرة والكفاءة من الجنسين سواء أطباء أو تمريض أو أخصائي علاج طبيعي بالمنزل.</Typography>
              </AccordionDetails>
            </Accordion>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
