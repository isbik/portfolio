import React from "react";

const CANVAS_WIDTH = typeof window !== "undefined" ? window.innerWidth : 1000;
const SCROLL_SPEED = 0.4;

enum SkillTypes {
  frontend,
  backend,
}

const getCords = (index: number) => {
  if (index % 3 === 0) {
    return { x: Math.ceil(index / 3) * 2 - 1, y: 0 };
  }

  if (index % 3 === 1) {
    return { x: Math.ceil(index / 3) * 2 - 1, y: 2 };
  }

  return { x: Math.ceil(index / 3) * 2, y: 1 };
};

const bubbles = [
  {
    name: "HTML",
    type: SkillTypes.frontend,
    src: "https://www.clipartmax.com/png/full/171-1719778_html5-html5-logo-png.png",
  },
  {
    name: "CSS",
    type: SkillTypes.frontend,
    src: "https://i.ibb.co/0Mvw0QZ/image-removebg-preview.png",
  },
  {
    name: "React",
    type: SkillTypes.frontend,
    src: "https://i2.wp.com/blog.zawislak.fr/wp-content/uploads/2017/04/React.png",
  },
  {
    name: "Express",
    type: SkillTypes.backend,
    src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "Golang",
    type: SkillTypes.backend,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png",
  },
  {
    name: "Vue",
    type: SkillTypes.frontend,
    src: "https://avatars.githubusercontent.com/u/6128107?s=280&v=4",
  },
  {
    name: "Javascript",
    type: SkillTypes.frontend,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    name: "MongoDB",
    type: SkillTypes.backend,
    src: "https://miro.medium.com/max/1400/0*38Z1MYBGrly_l9YQ.png",
  },
  {
    name: "Material UI",
    type: SkillTypes.frontend,
    src: "https://mui.com/static/logo.png",
  },
  {
    name: "Sass",
    type: SkillTypes.frontend,
    src: "https://www.pngkey.com/png/full/377-3771917_scss-logo.png",
  },
  {
    name: "Typescript",
    type: SkillTypes.frontend,
    src: "https://cdn.worldvectorlogo.com/logos/typescript-2.svg",
  },
  {
    name: "Figma",
    type: SkillTypes.frontend,
    src: "https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format",
  },
  {
    name: "Docker",
    type: SkillTypes.backend,
    src: "https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png",
  },
  {
    name: "Git",
    type: SkillTypes.backend,
    src: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    name: "WebSocket",
    type: SkillTypes.frontend,
    src: "https://seeklogo.com/images/W/websocket-logo-91B815D333-seeklogo.com.png",
  },
  {
    name: "Mobx",
    type: SkillTypes.frontend,
    src: "https://mobx.js.org/img/mobx.png",
  },
  {
    name: "Effector",
    type: SkillTypes.frontend,
    src: "https://effector.dev/img/comet.png",
  },
  {
    name: "Atomic design",
    type: SkillTypes.frontend,
    src: "https://miro.medium.com/max/1000/1*Vyp5SWZEfwY1P11HOCTRkA.png",
  },
  {
    name: "SQL",
    type: SkillTypes.backend,
    src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
  },
  {
    name: "JEST",
    type: SkillTypes.frontend,
    src: "https://nx.dev/documentation/shared/jest-logo.png",
  },
  {
    name: "Cypress",
    type: SkillTypes.frontend,
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Cypress.png",
  },
  {
    name: "REST API",
    type: SkillTypes.backend,
    src: "https://logodix.com/logo/875327.png",
  },
  {
    name: "ESLint",
    type: SkillTypes.frontend,
    src: "https://www.vectorlogo.zone/logos/eslint/eslint-ar21.png",
  },
  {
    name: "Prettier",
    type: SkillTypes.frontend,
    src: "https://seeklogo.com/images/P/prettier-logo-D5C5197E37-seeklogo.com.png",
  },
  {
    name: "Vite",
    type: SkillTypes.frontend,
    src: "https://vitejs.dev/logo.svg",
  },
  {
    name: "Webpack",
    type: SkillTypes.frontend,
    src: "https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.png",
  },
  {
    name: "Tailwind CSS",
    type: SkillTypes.frontend,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
  },
  {
    name: "Chakra UI",
    type: SkillTypes.frontend,
    src: "https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logo-colored@2x.png?raw=true",
  },
  {
    name: "GraphQL",
    type: SkillTypes.backend,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
  },
  {
    name: "Java",
    type: SkillTypes.backend,
    src: "https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png",
  },
  {
    name: "Java Spring",
    type: SkillTypes.backend,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/800px-Spring_Framework_Logo_2018.svg.png",
  },
  {
    name: "JIRA",
    type: SkillTypes.backend,
    src: "https://logos-world.net/wp-content/uploads/2021/02/Jira-Emblem.png",
  },
  {
    name: "Scrum",
    type: SkillTypes.backend,
    src: "https://banner2.cleanpng.com/20180516/rzw/kisspng-agile-software-development-scrum-computer-icons-ag-5afc42d5ddc678.9721919515264816219084.jpg",
  },
  {
    name: "JWT",
    type: SkillTypes.backend,
    src: "https://jwt.io/img/pic_logo.svg",
  },
  {
    name: "Redux",
    type: SkillTypes.frontend,
    src: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
  },
  {
    name: "Formik",
    type: SkillTypes.frontend,
    src: "https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png",
  },
];

const Skills = () => {
  const animationRef = React.useRef<number>();
  const bubblesRef = React.useRef(
    bubbles.map((bubble, index) => ({
      ...bubble,
      x: (window.innerWidth / bubbles.length) * 3 * getCords(index).x,
      y: getCords(index).y * 80,
    }))
  );

  const [isReady, setReady] = React.useState(true);

  React.useEffect(() => {
    if (!isReady) return;
    setTimeout(() => {
      setReady(true);
    }, 200);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isReady]);

  function animate() {
    bubblesRef.current = bubblesRef.current.map((bubble, index) => {
      const newX = bubble.x - SCROLL_SPEED;

      const element = document.getElementById(`bubble-${index}`);

      if (element) {
        element.style.transform = `translate(${newX}px, ${bubble.y}px)`;
      }

      return {
        ...bubble,
        x:
          newX < (-80 * (window.innerWidth / bubbles.length, 60)) / 4
            ? CANVAS_WIDTH
            : newX,
      };
    });

    animationRef.current = requestAnimationFrame(animate);
  }

  return (
    <div
      id="skills"
      className="flex flex-col justify-center py-20 text-center bg-gradient-to-t to-violet-700 from-purple-700 "
    >
      <h1 className="mb-16 text-6xl font-bold">
        <h2>What I can and know</h2>
      </h1>
      <div className="relative w-full overflow-hidden h-80">
        {bubbles.map((bubble, index) => (
          <div
            className="absolute flex items-center justify-center w-20 h-20 mr-20 overflow-hidden bg-white border-4 rounded-full border-3"
            id={`bubble-${index}`}
            key={index}
          >
            <img
              className="object-contain w-12 h-12"
              src={bubble.src}
              alt={bubble.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
