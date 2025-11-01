import { useState } from 'react';

import styles from './Skills.module.css';

export const Skills = () => {

    const study = [
        {
            name: 'UniCarioca',
            logo: '/assets/logo_unicarioca.png', 
            course: 'Bacharelado em Ciência da Computação',
            campus: 'Campus Rio Comprido',
            date: '08/2017 - 06/2024',
        },

        {
            name: 'YES! Curso de Idiomas',
            logo: '/assets/logo_unicarioca.png', 
            course: 'Inglês',
            campus: 'Unidade São Cristõvão',
            date: '08/2008 - 12/2015',
        },
    ];

    const languages = [
     {name: 'HTML5', image: '/assets/html5_logo.png'}, 
     {name: 'CSS3', image: '/assets/css3_logo.png'}, 
     {name: 'JavaScript', image: '/assets/javascript_logo.png'},
     {name: 'TypeScript', image: '/assets/Typescript_logo.png'},
     {name: 'Node', image: '/assets/Node.js_logo.svg.png'},
     {name: 'SQL', image: '/assets/Sql_data_base_with_logo.png'}
    ];

    const frameworks = [
        {name: 'React', image: '/assets/reactjs_logo.png'}, 
        {name: 'React Native', image: '/assets/react_native_logo.png'},
        {name: 'Bootstrap5', image: '/assets/bs5_logo.png'},
        {name: 'Express', image: '/assets/express-js-logo.png'}
    ];

    const tools = [
        {name: 'Git', image: '/assets/git_logo.png'},
        {name: 'GitHub', image: '/assets/github_logo.png'},
        {name: 'Figma', image: '/assets/figma_logo.png'},
        {name: 'Supabase', image: '/assets/supabase-original-wordmark.png'},
        {name: 'MongoDB', image: '/assets/mongodb_original.png'},
        {name: 'Inkscape', image: '/assets/Inkscape_Logo.svg.png'}
    ];

    const courses = [
        {name: 'Lógica de Programação', course: 'BeCode', link: ''},
        {name: 'Entendendo Comunicação Client x Server', course: 'DIO', link: ''},
        {name: 'Crie um Portfolio Vencedor', course: 'DIO', link: ''},
        {name: 'Versionamento com Git e GitHub', course: 'DIO', link: ''}
    ];

    const [showStudy, setShowStudy] = useState(false);

    const [showLanguage, setShowLanguage] = useState(false);

    const [showFramework, setShowFramework] = useState(false);

    const [showTools, setShowTools] = useState(false);

    const [showCourses, setShowCourses] = useState(false);


    function visibleStudy() {
        setShowStudy(!showStudy);
    }

    function visibleLanguages() {
        setShowLanguage(!showLanguage);
    }

    function visibleFrameworks() {
        setShowFramework(!showFramework);
    }

    function visibleTools() {
        setShowTools(!showTools);
    }

    function visibleCourses() {
        setShowCourses(!showCourses);
    }


    return (
        <div className={styles.skillContent}>

            <div className={styles.experiences}>
                <ul>
                    <button onClick={visibleStudy}>Situação Acadêmica {showStudy ? '▲' : '▼'}</button>
                    {showStudy && study.map((item, index) => (
                        <li key={index}>
                            <h3>{item.course}</h3>
                            <span>{item.name}</span>
                            <span>{item.campus}</span>
                            <span>{item.date}</span>
                        </li>
                    ))
                    }
                </ul>
            </div>


            <div className={styles.experiences}>
                <h2>Principais Competências</h2>
                
                <div className={styles.listSkill}>
                    <ul>
                        <button onClick={visibleLanguages}>Linguagens {showLanguage ? '▲' : '▼'}</button>
                        {showLanguage && languages.map((item, index) => (
                            <li key={index}>
                                <img src={item.image} alt={item.name} />
                            </li>
                        ))}
                    </ul>

                    <ul>
                        <button onClick={visibleFrameworks}>Frameworks {showFramework ? '▲' : '▼'}</button>
                        {showFramework && frameworks.map((item, index) => (
                            <li key={index}>
                                <img style={{ width: item.name === 'React Native' ? '160px' : '80px'}} src={item.image} alt={item.name} />
                            </li>
                        ))}
                    </ul>

                    <ul>
                        <button onClick={visibleTools}>Ferramentas {showTools ? '▲' : '▼'}</button>
                        {showTools && tools.map((item, index) => (
                            <li key={index}>
                                <img src={item.image} alt={item.name} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.courses}>
                <h2>Cursos Complementares</h2>
                <ul>
                    <button onClick={visibleCourses}>Cursos {showCourses ? '▲' : '▼'}</button>
                    {showCourses && courses.map((item, index) => (
                        <li key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.course}</p>
                            <a></a>
                        </li>
                    ))}
                </ul>
            </div>



        </div>
    );
}