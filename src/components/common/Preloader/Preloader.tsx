import React from 'react';


// import s from "./Preloader.module.css"
// import preloader from "../../../assets/images/preloader.png";
// type PreloaderPropsType = {}
// export function Preloader(props: PreloaderPropsType) {
//     return (
//         <div>
//             <img className={s.preloaderImg} src={preloader} alt={"preloader"}/>
//         </div>
//     );
// }

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export function Preloader() {
    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    );
}