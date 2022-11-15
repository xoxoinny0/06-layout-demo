import React from 'react';

// SEO 처리 기능 패키지
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Meta = (props) => {
  return (
    <HelmetProvider>
        <Helmet>
        <meta charset='utf-8' />
        <title>{props.title}</title>
        {/* SEO 태그 */}
        <meta name='description' content={props.description}/>
        <meta name='keywords' content={props.keywords}/>                
        <meta name='author' content={props.author}/>
        <meta name='subject' content={props.subject}/>
        <meta name='copyright' content={props.copyright}/>
        <meta name='content-language' content="ko"/>
        <meta property='og:type' content={'website'}/>              
        <meta property='og:title' content={'props.title'}/>                
        <meta property='og:description' content={'props.description'}/>                
        <meta property='og:url' content={'props.url'}/>                
        <meta property='og:image' content={'props.image'}/>            
        <link rel="icon" href={props.icon} type="image/png" />
        <link rel="shortcut icon" href={props.shrotcutIcon} type="image/png" />
        <link rel="apple-touch-icon" href={props.appleTouchIcon} type="image/png" />
        {/* 구글 웹폰트 적용 */}
        <link rel="preconnect" href="http://fonts.googleapis.com" />
        <link rel="preconnect" href="http://fonts.gstatic.com" crossorigin/>
        <link href="http://fonts.googleaips.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
        </Helmet>
    </HelmetProvider>
  );
};

/**
 * props에 대한 기본값 설정
 * @type {{keywords: string, author :string, description: string, title: string, url: string}}
 */

Meta.defaultProps = {
    title: 'React Example',
    description: 'React.js 예제 입니다.',
    keywords: 'React',
    author: '호쌤',
    subject: 'React.js Frontend Programming',
    copyright: 'Lee K.H',
    keywords: 'React',
    url: window.location.href,
    image: null,
    icon: null,
    shrotcutIcon : null,
    appleTouchIcon: null,
};

export default Meta;