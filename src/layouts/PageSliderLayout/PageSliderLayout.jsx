import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import MainPage from '../../pages/MainPage/MainPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import ProjectPage from '../../pages/ProjectPage/ProjectPage';


function PageSliderLayout() {
    const navigate = useNavigate();
    const location = useLocation();

    /* Swiper 인스턴스 상태 */
    const [swiper, setSwiper] = useState(null);

    const routes = ['/portfolio/', '/portfolio/about', '/portfolio/projects'];

    /* URL 경로가 변경될 때마다 해당 경로에 맞는 슬라이드로 이동 */
    useEffect(() => {
        if (swiper) {
            const index = routes.indexOf(location.pathname);
            if (index !== -1 && swiper.activeIndex !== index) {
                swiper.slideTo(index, 800);
            }
        }
    }, [location.pathname, swiper]);

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Swiper
                direction={'vertical'}
                mousewheel={{
                    releaseOnEdges: true,
                }}
                touchReleaseOnEdges={true}
                resistance={false}
                speed={800}
                autoHeight={true}
                slidesPerView={'auto'}
                freeMode={{
                    enabled: true,
                    sticky: false,
                    momentumBounce: false,
                }}
                modules={[Mousewheel, Pagination, FreeMode]}
                onSwiper={setSwiper}
                onSlideChange={(s) => {
                    if (location.pathname !== routes[s.activeIndex]) {
                        navigate(routes[s.activeIndex], { replace: true });
                    }
                }}
                style={{ height: '100%' }}
            >
                <SwiperSlide><MainPage /></SwiperSlide>
                <SwiperSlide><AboutPage /></SwiperSlide>
                <SwiperSlide><ProjectPage /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default PageSliderLayout;