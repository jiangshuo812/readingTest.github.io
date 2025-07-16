// 全局状态管理
class AppState {
    constructor() {
        this.currentQuestion = null;
        this.userAnswer = null;
        this.isAnswered = false;
        this.showAnalysis = false;
        this.similarQuestion = null;
        this.similarAnswered = false;
        this.allQuestions = [];
        this.currentQuestionIndex = 0;
        this.completedQuestions = new Set();
    }
}

const appState = new AppState();

// 全局数据存储
let questionData = {};
let distractorData = {};

// 相似题数据结构 - 为每道原题准备对应的相似题
const similarQuestionData = {
    "2016-21.0": {
        questionNumber: "2016-21.0-similar",
        questionSource: "2016年英语（一）第21题相似题",
        fullText: "The fashion industry has long been criticized for promoting unrealistic beauty standards. In recent years, several countries have taken steps to address this issue through legislation and industry self-regulation. France, for example, has implemented laws that ban the use of ultra-thin models on runways and prohibit websites that promote extreme dieting. These measures aim to protect both models and the public from harmful beauty ideals.\n\nDenmark has taken a different approach, focusing on voluntary industry standards rather than legal enforcement. The Danish Fashion Ethical Charter emphasizes the industry's responsibility for its impact on body ideals, particularly among young people. This approach relies on peer pressure and ethical persuasion rather than punitive measures.\n\nThe effectiveness of these different approaches remains a topic of debate. Some argue that legal measures provide stronger protection, while others believe that voluntary standards are more sustainable in the long term. What is clear is that the fashion industry worldwide is beginning to acknowledge its role in shaping beauty standards and is taking steps to address the issue.",
        question: "What is the main difference between France's and Denmark's approaches to fashion industry regulation?",
        candidateAnswers: "[A] France uses legal enforcement while Denmark relies on voluntary standards. [B] France focuses on model protection while Denmark focuses on public education. [C] France bans certain practices while Denmark promotes industry guidelines. [D] France emphasizes punishment while Denmark emphasizes prevention.",
        answer: "[A] France uses legal enforcement while Denmark relies on voluntary standards.",
        questionType: "阅读理解",
        locateWord: "France, Denmark, approaches, regulation",
        questionTypeTag: "对比题",
        locateSentence: "France, for example, has implemented laws that ban the use of ultra-thin models on runways and prohibit websites that promote extreme dieting. Denmark has taken a different approach, focusing on voluntary industry standards rather than legal enforcement.",
        keySentence: "France has implemented laws that ban the use of ultra-thin models on runways and prohibit websites that promote extreme dieting. Denmark has taken a different approach, focusing on voluntary industry standards rather than legal enforcement.",
        knowledgeTag: "对比题关键句定位",
        translation: "法国通过法律禁止使用超瘦模特和禁止宣传极端节食的网站。丹麦采取了不同的方法，专注于自愿的行业标准而不是法律执行。",
        explanation: "这道题目是一道对比题，需要比较法国和丹麦在时尚产业监管方面的不同方法。根据关键句，法国通过法律实施强制措施，而丹麦则依靠自愿的行业标准。因此正确答案是A选项。",
        distractorAnalysis: [
            {
                option: "[B] France focuses on model protection while Denmark focuses on public education.",
                optionPoint: "1) France 2) model protection 3) Denmark 4) public education",
                explanation: "B选项错误地将焦点放在保护对象上，而原文主要讨论的是监管方法的不同，而非保护对象的不同。",
                knowledgeTag: "信息歪曲"
            },
            {
                option: "[C] France bans certain practices while Denmark promotes industry guidelines.",
                optionPoint: "1) France 2) bans 3) Denmark 4) promotes",
                explanation: "C选项虽然提到了禁止和推广，但没有准确反映原文中法律执行与自愿标准的对比。",
                knowledgeTag: "以偏概全"
            },
            {
                option: "[D] France emphasizes punishment while Denmark emphasizes prevention.",
                optionPoint: "1) France 2) punishment 3) Denmark 4) prevention",
                explanation: "D选项将焦点放在惩罚与预防上，但原文主要讨论的是法律执行与自愿标准的区别。",
                knowledgeTag: "过度推理"
            }
        ],
        analysisStatus: "success"
    },
    "2016-22.0": {
        questionNumber: "2016-22.0-similar",
        questionSource: "2016年英语（一）第22题相似题",
        fullText: "The impact of social media on body image has become a significant concern in recent years. Research has shown that exposure to idealized images on platforms like Instagram and Facebook can negatively affect users' self-perception and mental health. Many young people, particularly teenagers, report feeling inadequate when comparing themselves to the carefully curated images they see online.\n\nIn response to these concerns, some social media platforms have begun implementing features to promote body positivity and mental health awareness. Instagram, for example, has introduced tools that allow users to filter out content that might trigger negative body image issues. Facebook has partnered with mental health organizations to provide resources for users who may be struggling with body image concerns.\n\nHowever, critics argue that these measures are insufficient and that more comprehensive regulation is needed. They point out that the algorithms used by social media platforms often prioritize engagement over user well-being, potentially exacerbating the problem rather than solving it.",
        question: "What is the main concern about social media's impact on body image?",
        candidateAnswers: "[A] It promotes unrealistic beauty standards that harm mental health. [B] It creates competition among users for online popularity. [C] It reduces face-to-face social interactions. [D] It encourages excessive use of digital devices.",
        answer: "[A] It promotes unrealistic beauty standards that harm mental health.",
        questionType: "阅读理解",
        locateWord: "social media, body image, impact",
        questionTypeTag: "细节题",
        locateSentence: "Research has shown that exposure to idealized images on platforms like Instagram and Facebook can negatively affect users' self-perception and mental health.",
        keySentence: "Research has shown that exposure to idealized images on platforms like Instagram and Facebook can negatively affect users' self-perception and mental health.",
        knowledgeTag: "细节题关键句定位",
        translation: "研究表明，在Instagram和Facebook等平台上接触理想化图像会对用户的自我认知和心理健康产生负面影响。",
        explanation: "这道题目是一道细节题，需要从原文中找到关于社交媒体对身体形象影响的主要担忧。根据关键句，研究表明接触理想化图像会对心理健康产生负面影响。因此正确答案是A选项。",
        distractorAnalysis: [
            {
                option: "[B] It creates competition among users for online popularity.",
                optionPoint: "1) creates 2) competition 3) online popularity",
                explanation: "B选项虽然提到了竞争，但原文主要关注的是对身体形象和心理健康的影响，而非在线人气的竞争。",
                knowledgeTag: "信息歪曲"
            },
            {
                option: "[C] It reduces face-to-face social interactions.",
                optionPoint: "1) reduces 2) face-to-face 3) social interactions",
                explanation: "C选项提到了面对面社交互动的减少，但这不是原文讨论的主要问题。原文主要关注的是身体形象和心理健康问题。",
                knowledgeTag: "范围扩大"
            },
            {
                option: "[D] It encourages excessive use of digital devices.",
                optionPoint: "1) encourages 2) excessive use 3) digital devices",
                explanation: "D选项虽然提到了过度使用数字设备，但这不是原文讨论的主要问题。原文主要关注的是身体形象和心理健康问题。",
                knowledgeTag: "范围扩大"
            }
        ],
        analysisStatus: "success"
    },
    "2016-23.0": {
        questionNumber: "2016-23.0-similar",
        questionSource: "2016年英语（一）第23题相似题",
        fullText: "The concept of beauty has evolved significantly throughout history, reflecting the cultural and social values of different eras. In ancient times, beauty standards were often tied to health and fertility, with plump figures being considered attractive in many cultures. During the Renaissance, artists celebrated the human form in all its diversity, from the voluptuous figures of Rubens to the idealized proportions of Michelangelo.\n\nIn the 20th century, beauty standards became increasingly influenced by mass media and advertising. The rise of fashion magazines and Hollywood films created new ideals that were often unattainable for most people. This trend has continued into the digital age, where social media platforms amplify these unrealistic standards.\n\nToday, there is a growing movement toward body positivity and inclusivity in beauty standards. Many brands and influencers are challenging traditional beauty norms and promoting acceptance of diverse body types. This shift reflects broader social changes toward greater acceptance and celebration of individual differences.",
        question: "How has the concept of beauty changed over time?",
        candidateAnswers: "[A] It has become more diverse and inclusive in recent years. [B] It has become increasingly standardized across cultures. [C] It has remained consistent throughout history. [D] It has become more focused on physical appearance.",
        answer: "[A] It has become more diverse and inclusive in recent years.",
        questionType: "阅读理解",
        locateWord: "beauty, concept, changed, time",
        questionTypeTag: "推理题",
        locateSentence: "Today, there is a growing movement toward body positivity and inclusivity in beauty standards. Many brands and influencers are challenging traditional beauty norms and promoting acceptance of diverse body types.",
        keySentence: "Today, there is a growing movement toward body positivity and inclusivity in beauty standards.",
        knowledgeTag: "推理题关键句定位",
        translation: "今天，在美容标准方面出现了越来越多的身体积极性和包容性运动。",
        explanation: "这道题目是一道推理题，需要从原文中推断出美容概念随时间的变化。根据关键句，今天出现了越来越多的身体积极性和包容性运动，这表明美容概念变得更加多样化和包容。因此正确答案是A选项。",
        distractorAnalysis: [
            {
                option: "[B] It has become increasingly standardized across cultures.",
                optionPoint: "1) standardized 2) across cultures",
                explanation: "B选项与原文意思相反，原文强调的是多样化和包容性，而不是标准化。",
                knowledgeTag: "反向干扰"
            },
            {
                option: "[C] It has remained consistent throughout history.",
                optionPoint: "1) remained 2) consistent 3) throughout history",
                explanation: "C选项与原文明显不符，原文详细描述了美容概念在不同历史时期的变化。",
                knowledgeTag: "信息歪曲"
            },
            {
                option: "[D] It has become more focused on physical appearance.",
                optionPoint: "1) focused 2) physical appearance",
                explanation: "D选项虽然提到了外表，但原文强调的是包容性和多样性，而非对外表的关注。",
                knowledgeTag: "过度推理"
            }
        ],
        analysisStatus: "success"
    },
    "2016-24.0": {
        questionNumber: "2016-24.0-similar",
        questionSource: "2016年英语（一）第24题相似题",
        fullText: "The relationship between diet and body image has become increasingly complex in modern society. While proper nutrition is essential for health, the diet industry has often promoted unrealistic standards and unhealthy practices. Many diet programs promise quick results but fail to address the underlying psychological factors that contribute to disordered eating patterns.\n\nResearch has shown that restrictive diets can actually lead to weight gain in the long term, as the body adapts to periods of food scarcity by becoming more efficient at storing fat. Additionally, the psychological stress of constant dieting can contribute to emotional eating and other unhealthy behaviors.\n\nExperts recommend a balanced approach that focuses on overall health rather than just weight loss. This includes developing a healthy relationship with food, engaging in regular physical activity, and addressing any underlying emotional issues that may contribute to disordered eating. The goal should be sustainable health rather than achieving a specific body type or weight.",
        question: "What is the main problem with many diet programs?",
        candidateAnswers: "[A] They focus on quick results rather than sustainable health. [B] They are too expensive for most people to afford. [C] They require too much time and effort to follow. [D] They are not based on scientific research.",
        answer: "[A] They focus on quick results rather than sustainable health.",
        questionType: "阅读理解",
        locateWord: "diet programs, problem, quick results",
        questionTypeTag: "细节题",
        locateSentence: "Many diet programs promise quick results but fail to address the underlying psychological factors that contribute to disordered eating patterns.",
        keySentence: "Many diet programs promise quick results but fail to address the underlying psychological factors that contribute to disordered eating patterns.",
        knowledgeTag: "细节题关键句定位",
        translation: "许多饮食计划承诺快速结果，但未能解决导致饮食失调模式的根本心理因素。",
        explanation: "这道题目是一道细节题，需要从原文中找到许多饮食计划的主要问题。根据关键句，许多饮食计划承诺快速结果，但未能解决根本的心理因素。因此正确答案是A选项。",
        distractorAnalysis: [
            {
                option: "[B] They are too expensive for most people to afford.",
                optionPoint: "1) expensive 2) afford",
                explanation: "B选项提到了费用问题，但原文没有讨论饮食计划的价格问题。",
                knowledgeTag: "信息歪曲"
            },
            {
                option: "[C] They require too much time and effort to follow.",
                optionPoint: "1) require 2) time 3) effort",
                explanation: "C选项提到了时间和努力，但原文主要关注的是快速结果与可持续健康的问题。",
                knowledgeTag: "范围扩大"
            },
            {
                option: "[D] They are not based on scientific research.",
                optionPoint: "1) not based 2) scientific research",
                explanation: "D选项提到了科学研究，但原文没有讨论饮食计划是否基于科学研究。",
                knowledgeTag: "信息歪曲"
            }
        ],
        analysisStatus: "success"
    },
    "2016-25.0": {
        questionNumber: "2016-25.0-similar",
        questionSource: "2016年英语（一）第25题相似题",
        fullText: "The role of the media in shaping public perception of beauty and health has been a subject of intense debate. Critics argue that the media often promotes unrealistic and potentially harmful beauty standards, particularly for women and young people. They point to the widespread use of photo editing and airbrushing in advertising and entertainment, which creates impossible ideals that can lead to body dissatisfaction and eating disorders.\n\nProponents of media freedom argue that the media simply reflects existing social values and preferences. They suggest that attempts to regulate media content could infringe on freedom of expression and artistic creativity. However, they also acknowledge that media organizations have a responsibility to consider the potential impact of their content on vulnerable audiences.\n\nThe debate highlights the complex balance between artistic expression and social responsibility. While the media has the right to creative freedom, it also has a duty to consider the broader social implications of the messages it conveys. This is particularly important when the audience includes impressionable young people who may be more susceptible to media influence.",
        question: "What is the main argument of media freedom proponents?",
        candidateAnswers: "[A] The media reflects existing social values rather than creating them. [B] Media regulation would limit artistic creativity and expression. [C] Media organizations should be held accountable for their content. [D] The media has no responsibility for audience impact.",
        answer: "[A] The media reflects existing social values rather than creating them.",
        questionType: "阅读理解",
        locateWord: "media freedom, proponents, social values",
        questionTypeTag: "细节题",
        locateSentence: "Proponents of media freedom argue that the media simply reflects existing social values and preferences.",
        keySentence: "Proponents of media freedom argue that the media simply reflects existing social values and preferences.",
        knowledgeTag: "细节题关键句定位",
        translation: "媒体自由的支持者认为，媒体只是反映现有的社会价值观和偏好。",
        explanation: "这道题目是一道细节题，需要从原文中找到媒体自由支持者的主要论点。根据关键句，媒体自由的支持者认为媒体只是反映现有的社会价值观和偏好。因此正确答案是A选项。",
        distractorAnalysis: [
            {
                option: "[B] Media regulation would limit artistic creativity and expression.",
                optionPoint: "1) Media regulation 2) limit 3) artistic creativity",
                explanation: "B选项虽然提到了艺术创造力和表达，但这不是支持者的主要论点。原文强调的是媒体反映社会价值观。",
                knowledgeTag: "以偏概全"
            },
            {
                option: "[C] Media organizations should be held accountable for their content.",
                optionPoint: "1) Media organizations 2) accountable 3) content",
                explanation: "C选项与原文意思相反，支持者认为媒体只是反映社会价值观，而不是应该对内容负责。",
                knowledgeTag: "反向干扰"
            },
            {
                option: "[D] The media has no responsibility for audience impact.",
                optionPoint: "1) media 2) no responsibility 3) audience impact",
                explanation: "D选项过度推理，原文没有说媒体对受众影响没有责任，而是说媒体只是反映社会价值观。",
                knowledgeTag: "过度推理"
            }
        ],
        analysisStatus: "success"
    }
};

// 直接内嵌题目和干扰项数据
const questionJson = [
  {
    "questionNumber": "2016-21.0",
    "questionSource": "2016年英语（一）第21题",
    "fullText": "France, which prides itself as the global innovator of fashion, has decided its fashion industry has lost an absolute right to define physical beauty for women. Its lawmakers gave preliminary approval last week to a law that would make it a crime to employ ultra-thin models on runways. The parliament also agreed to ban websites that \"incite excessive thinness\" by promoting extreme dieting.\n\nSuch measures have a couple of uplifting motives. They suggest beauty should not be defined by looks that end up impinging on health. That's a start. And the ban on ultra-thin models seems to go beyond protecting models from starving themselves to death – as some have done. It tells the fashion industry that it must take responsibility for the signal it sends women, especially teenage girls, about the social tape-measure they must use to determine their individual worth.\n\nThe bans, if fully enforced, would suggest to women (and many men) that they should not let others be arbiters of their beauty. And perhaps faintly, they hint that people should look to intangible qualities like character and intellect rather than dieting their way to size zero or wasp-waist physiques.\n\nThe French measures, however, rely too much on severe punishment to change a culture that still regards beauty as skin-deep – and bone-showing. Under the law, using a fashion model that does not meet a government-defined index of body mass could result in a $85,000 fine and six months in prison.\n\nThe fashion industry knows it has an inherent problem in focusing on material adornment and idealized body types. In Denmark, the United States, and a few other countries, it is trying to set voluntary standards for models and fashion images that rely more on peer pressure for enforcement.\n\nIn contrast to France's actions, Denmark's fashion industry agreed last month on rules and sanctions regarding the age, health, and other characteristics of models. The newly revised Danish Fashion Ethical Charter clearly states: \"We are aware of and take responsibility for the impact the fashion industry has on body ideals, especially on young people.\" The charter's main tool of enforcement is to deny access for designers and modeling agencies to Copenhagen Fashion Week (CFW), which is run by the Danish Fashion Institute. But in general it relies on a name-and-shame method of compliance.\n\nRelying on ethical persuasion rather than law to address the misuse of body ideals may be the best step. Even better would be to help elevate notions of beauty beyond the material standards of a particular industry.",
    "question": "According to the first paragraph, what would happen in France?",
    "candidateAnswers": "[A] Physical beauty would be redefined. [B] New runways would be constructed. [C] Websites about dieting would thrive. [D] The fashion industry would decline.",
    "answer": "[A] Physical beauty would be redefined.",
    "questionType": "阅读理解",
    "locateWord": "first paragraph",
    "questionTypeTag": "细节题",
    "locateSentence": "France, which prides itself as the global innovator of fashion, has decided its fashion industry has lost an absolute right to define physical beauty for women. Its lawmakers gave preliminary approval last week to a law that would make it a crime to employ ultra-thin models on runways. The parliament also agreed to ban websites that \"incite excessive thinness\" by promoting extreme dieting.",
    "locateParagraph": "France, which prides itself as the global innovator of fashion, has decided its fashion industry has lost an absolute right to define physical beauty for women. Its lawmakers gave preliminary approval last week to a law that would make it a crime to employ ultra-thin models on runways. The parliament also agreed to ban websites that \"incite excessive thinness\" by promoting extreme dieting.",
    "keySentence": "France, which prides itself as the global innovator of fashion, has decided its fashion industry has lost an absolute right to define physical beauty for women.",
    "knowledgeTag": "细节题关键句定位",
    "translation": "法国，这个以全球时尚创新者自豪的国家，已经决定其时尚产业失去了为女性定义身体美的绝对权利。",
    "explanation": "通过题干中的定位词\"first paragraph\"能够直接定位到第一段。第一段开头第一句就是关键句，明确指出法国已经决定其时尚产业失去了为女性定义身体美的绝对权利。这句话的核心信息是\"has decided its fashion industry has lost an absolute right to define physical beauty for women\"（已经决定其时尚产业失去了为女性定义身体美的绝对权利）。接下来的两句话具体说明了法国采取的措施：立法禁止雇用超瘦模特，禁止宣传极端节食的网站。这些措施都是为了实现第一句话所表达的目标。选项A\"Physical beauty would be redefined\"（身体美将被重新定义）与原文形成同义改写关系。原文中的\"lost an absolute right to define physical beauty\"（失去了定义身体美的绝对权利）意味着原有的身体美定义标准将发生改变，即身体美将被重新定义。这里运用了同义改写原则，选项A中的\"redefined\"与原文中\"lost an absolute right to define\"构成同义表达。",
    "analysisStatus": "success"
  },
  {
    "questionNumber": "2016-22.0",
    "questionSource": "2016年英语（一）第22题",
    "fullText": "France, which prides itself as the global innovator of fashion, has decided its fashion industry has lost an absolute right to define physical beauty for women. Its lawmakers gave preliminary approval last week to a law that would make it a crime to employ ultra-thin models on runways. The parliament also agreed to ban websites that \"incite excessive thinness\" by promoting extreme dieting.\\n\\nSuch measures have a couple of uplifting motives. They suggest beauty should not be defined by looks that end up impinging on health. That's a start. And the ban on ultra-thin models seems to go beyond protecting models from starving themselves to death – as some have done. It tells the fashion industry that it must take responsibility for the signal it sends women, especially teenage girls, about the social tape-measure they must use to determine their individual worth.\\n\\nThe bans, if fully enforced, would suggest to women (and many men) that they should not let others be arbiters of their beauty. And perhaps faintly, they hint that people should look to intangible qualities like character and intellect rather than dieting their way to size zero or wasp-waist physiques.\\n\\nThe French measures, however, rely too much on severe punishment to change a culture that still regards beauty as skin-deep – and bone-showing. Under the law, using a fashion model that does not meet a government-defined index of body mass could result in a $85,000 fine and six months in prison.\\n\\nThe fashion industry knows it has an inherent problem in focusing on material adornment and idealized body types. In Denmark, the United States, and a few other countries, it is trying to set voluntary standards for models and fashion images that rely more on peer pressure for enforcement.\\n\\nIn contrast to France's actions, Denmark's fashion industry agreed last month on rules and sanctions regarding the age, health, and other characteristics of models. The newly revised Danish Fashion Ethical Charter clearly states: \"We are aware of and take responsibility for the impact the fashion industry has on body ideals, especially on young people.\" The charter's main tool of enforcement is to deny access for designers and modeling agencies to Copenhagen Fashion Week (CFW), which is run by the Danish Fashion Institute. But in general it relies on a name-and-shame method of compliance.\\n\\nRelying on ethical persuasion rather than law to address the misuse of body ideals may be the best step. Even better would be to help elevate notions of beauty beyond the material standards of a particular industry.",
    "question": "The phrase \"impinging on\" (Line 2, Para. 2) is closest in meaning to",
    "candidateAnswers": "[A] indicating the state of. [B] heightening the value of. [C] losing faith in. [D] doing harm to.",
    "answer": "[D] doing harm to.",
    "questionType": "阅读理解",
    "locateWord": "impinging on",
    "questionTypeTag": "词句理解题",
    "locateSentence": "They suggest beauty should not be defined by looks that end up impinging on health.",
    "locateParagraph": "Such measures have a couple of uplifting motives. They suggest beauty should not be defined by looks that end up impinging on health. That's a start. And the ban on ultra-thin models seems to go beyond protecting models from starving themselves to death – as some have done. It tells the fashion industry that it must take responsibility for the signal it sends women, especially teenage girls, about the social tape-measure they must use to determine their individual worth.",
    "keySentence": "They suggest beauty should not be defined by looks that end up impinging on health.",
    "knowledgeTag": "词句理解题关键句定位",
    "translation": "这些措施表明，美丽不应该由那些最终会损害健康的外表来定义。",
    "explanation": "通过题干中的定位词\"impinging on\"能够找到第二段第二句关键句。要理解\"impinging on\"的含义，需要分析上下文语境。前文提到法国通过法律禁止雇用超瘦模特，这些措施有着积极的动机。关键句指出美丽不应该由那些最终会\"impinging on health\"的外表来定义。结合上下文可知，这里讨论的是超瘦模特和极端节食对健康的影响。从逻辑关系看，如果美丽标准会\"impinging on health\"，那么这种标准就是有问题的，需要被禁止。因此\"impinging on\"在这里表示对健康产生负面影响，即\"损害、伤害\"的意思。选项[D] doing harm to（对...造成伤害）与原文中\"impinging on\"构成同义改写关系，准确表达了超瘦的美丽标准对健康造成损害的含义。",
    "analysisStatus": "success"
  },
  {
    "questionNumber": "2016-23.0",
    "questionSource": "2016年英语（一）第23题",
    "fullText": "France, which prides itself as the global innovator of fashion, has decided its fashion industry has lost an absolute right to define physical beauty for women. Its lawmakers gave preliminary approval last week to a law that would make it a crime to employ ultra-thin models on runways. The parliament also agreed to ban websites that \"incite excessive thinness\" by promoting extreme dieting.\\n\\nSuch measures have a couple of uplifting motives. They suggest beauty should not be defined by looks that end up impinging on health. That's a start. And the ban on ultra-thin models seems to go beyond protecting models from starving themselves to death – as some have done. It tells the fashion industry that it must take responsibility for the signal it sends women, especially teenage girls, about the social tape-measure they must use to determine their individual worth.\\n\\nThe bans, if fully enforced, would suggest to women (and many men) that they should not let others be arbiters of their beauty. And perhaps faintly, they hint that people should look to intangible qualities like character and intellect rather than dieting their way to size zero or wasp-waist physiques.\\n\\nThe French measures, however, rely too much on severe punishment to change a culture that still regards beauty as skin-deep – and bone-showing. Under the law, using a fashion model that does not meet a government-defined index of body mass could result in a $85,000 fine and six months in prison.\\n\\nThe fashion industry knows it has an inherent problem in focusing on material adornment and idealized body types. In Denmark, the United States, and a few other countries, it is trying to set voluntary standards for models and fashion images that rely more on peer pressure for enforcement.\\n\\nIn contrast to France's actions, Denmark's fashion industry agreed last month on rules and sanctions regarding the age, health, and other characteristics of models. The newly revised Danish Fashion Ethical Charter clearly states: \"We are aware of and take responsibility for the impact the fashion industry has on body ideals, especially on young people.\" The charter's main tool of enforcement is to deny access for designers and modeling agencies to Copenhagen Fashion Week (CFW), which is run by the Danish Fashion Institute. But in general it relies on a name-and-shame method of compliance.\\n\\nRelying on ethical persuasion rather than law to address the misuse of body ideals may be the best step. Even better would be to help elevate notions of beauty beyond the material standards of a particular industry.",
    "question": "Which of the following is true of the fashion industry?",
    "candidateAnswers": "[A] The French measures have already failed. [B] Its inherent problems are getting worse. [C] Models are no longer under peer pressure. [D] New standards are being set in Denmark.",
    "answer": "[D] New standards are being set in Denmark.",
    "questionType": "阅读理解",
    "locateWord": "fashion industry",
    "questionTypeTag": "细节题",
    "locateSentence": "The fashion industry knows it has an inherent problem in focusing on material adornment and idealized body types. In Denmark, the United States, and a few other countries, it is trying to set voluntary standards for models and fashion images that rely more on peer pressure for enforcement.",
    "locateParagraph": "The fashion industry knows it has an inherent problem in focusing on material adornment and idealized body types. In Denmark, the United States, and a few other countries, it is trying to set voluntary standards for models and fashion images that rely more on peer pressure for enforcement.",
    "keySentence": "In contrast to France's actions, Denmark's fashion industry agreed last month on rules and sanctions regarding the age, health, and other characteristics of models.",
    "knowledgeTag": "细节题关键句定位",
    "translation": "与法国的行动形成对比的是，丹麦的时尚产业上个月就模特的年龄、健康状况和其他特征制定了规则和制裁措施。",
    "explanation": "通过题干中的定位词\"fashion industry\"能够找到第五段和第六段相关内容。题干询问关于时尚产业的哪个说法是正确的。第五段提到时尚产业知道自己在关注物质装饰和理想化身材方面存在固有问题，在丹麦、美国等国家，正试图为模特和时尚形象制定自愿标准。第六段开头明确指出\"In contrast to France's actions, Denmark's fashion industry agreed last month on rules and sanctions regarding the age, health, and other characteristics of models\"（与法国的行动形成对比的是，丹麦的时尚产业上个月就模特的年龄、健康状况和其他特征制定了规则和制裁措施）。这句话直接说明丹麦正在制定新标准。选项[D] New standards are being set in Denmark（丹麦正在制定新标准）与原文信息完全吻合，构成同义改写关系。原文中的\"agreed on rules and sanctions\"对应选项中的\"new standards are being set\"。",
    "analysisStatus": "success"
  },
  {
    "questionNumber": "2016-24.0",
    "questionSource": "2016年英语（一）第24题",
    "fullText": "France, which prides itself as the global innovator of fashion, has decided its fashion industry has lost an absolute right to define physical beauty for women. Its lawmakers gave preliminary approval last week to a law that would make it a crime to employ ultra-thin models on runways. The parliament also agreed to ban websites that \"incite excessive thinness\" by promoting extreme dieting.\\n\\nSuch measures have a couple of uplifting motives. They suggest beauty should not be defined by looks that end up impinging on health. That's a start. And the ban on ultra-thin models seems to go beyond protecting models from starving themselves to death – as some have done. It tells the fashion industry that it must take responsibility for the signal it sends women, especially teenage girls, about the social tape-measure they must use to determine their individual worth.\\n\\nThe bans, if fully enforced, would suggest to women (and many men) that they should not let others be arbiters of their beauty. And perhaps faintly, they hint that people should look to intangible qualities like character and intellect rather than dieting their way to size zero or wasp-waist physiques.\\n\\nThe French measures, however, rely too much on severe punishment to change a culture that still regards beauty as skin-deep – and bone-showing. Under the law, using a fashion model that does not meet a government-defined index of body mass could result in a $85,000 fine and six months in prison.\\n\\nThe fashion industry knows it has an inherent problem in focusing on material adornment and idealized body types. In Denmark, the United States, and a few other countries, it is trying to set voluntary standards for models and fashion images that rely more on peer pressure for enforcement.\\n\\nIn contrast to France's actions, Denmark's fashion industry agreed last month on rules and sanctions regarding the age, health, and other characteristics of models. The newly revised Danish Fashion Ethical Charter clearly states: \"We are aware of and take responsibility for the impact the fashion industry has on body ideals, especially on young people.\" The charter's main tool of enforcement is to deny access for designers and modeling agencies to Copenhagen Fashion Week (CFW), which is run by the Danish Fashion Institute. But in general it relies on a name-and-shame method of compliance.\\n\\nRelying on ethical persuasion rather than law to address the misuse of body ideals may be the best step. Even better would be to help elevate notions of beauty beyond the material standards of a particular industry.",
    "question": "A designer is most likely to be rejected by CFW for",
    "candidateAnswers": "[A] pursuing perfect physical conditions. [B] caring too much about models' character. [C] showing little concern for health factors. [D] setting a high age threshold for models.",
    "answer": "[C] showing little concern for health factors.",
    "questionType": "阅读理解",
    "locateWord": "CFW",
    "questionTypeTag": "细节题",
    "locateSentence": "The charter's main tool of enforcement is to deny access for designers and modeling agencies to Copenhagen Fashion Week (CFW), which is run by the Danish Fashion Institute.",
    "locateParagraph": "In contrast to France's actions, Denmark's fashion industry agreed last month on rules and sanctions regarding the age, health, and other characteristics of models. The newly revised Danish Fashion Ethical Charter clearly states: \"We are aware of and take responsibility for the impact the fashion industry has on body ideals, especially on young people.\" The charter's main tool of enforcement is to deny access for designers and modeling agencies to Copenhagen Fashion Week (CFW), which is run by the Danish Fashion Institute. But in general it relies on a name-and-shame method of compliance.",
    "keySentence": "The newly revised Danish Fashion Ethical Charter clearly states: \"We are aware of and take responsibility for the impact the fashion industry has on body ideals, especially on young people.\" The charter's main tool of enforcement is to deny access for designers and modeling agencies to Copenhagen Fashion Week (CFW), which is run by the Danish Fashion Institute.",
    "knowledgeTag": "细节题关键句定位",
    "translation": "新修订的丹麦时尚道德宪章明确规定：\"我们意识到并承担时尚行业对身体理想的影响责任，特别是对年轻人的影响。\"该宪章的主要执行工具是拒绝设计师和模特经纪公司参加由丹麦时尚研究所举办的哥本哈根时装周(CFW)。",
    "explanation": "通过题干中的定位词\"CFW\"能够找到最后一段的关键信息。丹麦时尚道德宪章明确表明他们意识到并承担时尚行业对身体理想的影响责任，特别是对年轻人的影响。该宪章的主要执行工具是拒绝那些不符合要求的设计师和模特经纪公司参加哥本哈根时装周。从前文可知，丹麦制定的规则涉及模特的年龄、健康和其他特征。因此，设计师最可能因为对健康因素关注不够而被CFW拒绝。选项C中的\"showing little concern for health factors\"与原文中强调的对模特健康特征的关注形成对比，符合被拒绝的原因。这体现了同义改写原则，原文中的\"health\"和\"take responsibility for the impact\"与选项C中的\"health factors\"和\"showing little concern\"构成反向对应关系。",
    "analysisStatus": "success"
  },
  {
    "questionNumber": "2016-25.0",
    "questionSource": "2016年英语（一）第25题",
    "fullText": "France, which prides itself as the global innovator of fashion, has decided its fashion industry has lost an absolute right to define physical beauty for women. Its lawmakers gave preliminary approval last week to a law that would make it a crime to employ ultra-thin models on runways. The parliament also agreed to ban websites that \"incite excessive thinness\" by promoting extreme dieting.\\n\\nSuch measures have a couple of uplifting motives. They suggest beauty should not be defined by looks that end up impinging on health. That's a start. And the ban on ultra-thin models seems to go beyond protecting models from starving themselves to death – as some have done. It tells the fashion industry that it must take responsibility for the signal it sends women, especially teenage girls, about the social tape-measure they must use to determine their individual worth.\\n\\nThe bans, if fully enforced, would suggest to women (and many men) that they should not let others be arbiters of their beauty. And perhaps faintly, they hint that people should look to intangible qualities like character and intellect rather than dieting their way to size zero or wasp-waist physiques.\\n\\nThe French measures, however, rely too much on severe punishment to change a culture that still regards beauty as skin-deep – and bone-showing. Under the law, using a fashion model that does not meet a government-defined index of body mass could result in a $85,000 fine and six months in prison.\\n\\nThe fashion industry knows it has an inherent problem in focusing on material adornment and idealized body types. In Denmark, the United States, and a few other countries, it is trying to set voluntary standards for models and fashion images that rely more on peer pressure for enforcement.\\n\\nIn contrast to France's actions, Denmark's fashion industry agreed last month on rules and sanctions regarding the age, health, and other characteristics of models. The newly revised Danish Fashion Ethical Charter clearly states: \"We are aware of and take responsibility for the impact the fashion industry has on body ideals, especially on young people.\" The charter's main tool of enforcement is to deny access for designers and modeling agencies to Copenhagen Fashion Week (CFW), which is run by the Danish Fashion Institute. But in general it relies on a name-and-shame method of compliance.\\n\\nRelying on ethical persuasion rather than law to address the misuse of body ideals may be the best step. Even better would be to help elevate notions of beauty beyond the material standards of a particular industry.",
    "question": "Which of the following may be the best title of the text?",
    "candidateAnswers": "[A] The Great Threats to the Fashion Industry [B] Just Another Round of Struggle for Beauty [C] A Dilemma for the Starving Models in France [D] A Challenge to the Fashion Industry's Body Ideals",
    "answer": "[D] A Challenge to the Fashion Industry's Body Ideals",
    "questionType": "阅读理解",
    "locateWord": "best title",
    "questionTypeTag": "主旨题",
    "locateSentence": "无",
    "locateParagraph": "无",
    "keySentence": "France, which prides itself as the global innovator of fashion, has decided its fashion industry has lost an absolute right to define physical beauty for women. The bans, if fully enforced, would suggest to women (and many men) that they should not let others be arbiters of their beauty. Even better would be to help elevate notions of beauty beyond the material standards of a particular industry.",
    "knowledgeTag": "主旨题关键句定位",
    "translation": "法国，这个以全球时尚创新者自豪的国家，已经决定其时尚产业失去了为女性定义身体美的绝对权利。如果这些禁令得到充分执行，将向女性（和许多男性）表明，她们不应该让他人成为其美丽的仲裁者。更好的做法是帮助将美的概念提升到超越特定行业的物质标准。",
    "explanation": "主旨题需要通过全文内容来确定文章的中心思想。文章开篇介绍了法国通过立法禁止雇用超瘦模特和禁止宣传极端节食的网站，这是对时尚产业传统美丽标准的挑战。第二段说明这些措施的积极动机，即美丽不应该由损害健康的外表来定义，时尚产业必须为其传递给女性的信号承担责任。第三段进一步指出，这些禁令暗示人们应该关注品格和智慧等无形品质，而不是通过节食来追求零号身材。第四段转折，指出法国的措施过于依赖严厉惩罚来改变文化。第五段介绍丹麦等国家采用的自愿标准和同行压力执行方式。最后一段总结，依靠道德劝说而非法律来解决身体理想的误用可能是最好的步骤，更好的做法是帮助将美的概念提升到超越特定行业的物质标准。全文围绕时尚产业的身体理想标准受到挑战这一主题展开，法国的立法措施、丹麦的自愿标准都是对传统时尚产业美丽标准的挑战。选项D\"A Challenge to the Fashion Industry's Body Ideals\"（对时尚产业身体理想的挑战）准确概括了文章的核心内容，体现了同义改写原则，将文章中的\"define physical beauty\"、\"body ideals\"、\"material standards\"等概念统一为\"Body Ideals\"。",
    "analysisStatus": "success"
  }
  // ... 其余题目 ...
];

const distractorJson = [
  {
    "questionNumber": "2016-21.0",
    "questionSource": "2016年英语（一）第21题",
    "fullText": "France, which prides itself as the global innovator of fashion, has decided its fashion industry has lost an absolute right to define physical beauty for women. Its lawmakers gave preliminary approval last week to a law that would make it a crime to employ ultra-thin models on runways. The parliament also agreed to ban websites that \"incite excessive thinness\" by promoting extreme dieting.\n\nSuch measures have a couple of uplifting motives. They suggest beauty should not be defined by looks that end up impinging on health. That's a start. And the ban on ultra-thin models seems to go beyond protecting models from starving themselves to death – as some have done. It tells the fashion industry that it must take responsibility for the signal it sends women, especially teenage girls, about the social tape-measure they must use to determine their individual worth.\n\nThe bans, if fully enforced, would suggest to women (and many men) that they should not let others be arbiters of their beauty. And perhaps faintly, they hint that people should look to intangible qualities like character and intellect rather than dieting their way to size zero or wasp-waist physiques.\n\nThe French measures, however, rely too much on severe punishment to change a culture that still regards beauty as skin-deep – and bone-showing. Under the law, using a fashion model that does not meet a government-defined index of body mass could result in a $85,000 fine and six months in prison.\n\nThe fashion industry knows it has an inherent problem in focusing on material adornment and idealized body types. In Denmark, the United States, and a few other countries, it is trying to set voluntary standards for models and fashion images that rely more on peer pressure for enforcement.\n\nIn contrast to France's actions, Denmark's fashion industry agreed last month on rules and sanctions regarding the age, health, and other characteristics of models. The newly revised Danish Fashion Ethical Charter clearly states: \"We are aware of and take responsibility for the impact the fashion industry has on body ideals, especially on young people.\" The charter's main tool of enforcement is to deny access for designers and modeling agencies to Copenhagen Fashion Week (CFW), which is run by the Danish Fashion Institute. But in general it relies on a name-and-shame method of compliance.\n\nRelying on ethical persuasion rather than law to address the misuse of body ideals may be the best step. Even better would be to help elevate notions of beauty beyond the material standards of a particular industry.",
    "question": "According to the first paragraph, what would happen in France?",
    "candidateAnswers": "[A] Physical beauty would be redefined. [B] New runways would be constructed. [C] Websites about dieting would thrive. [D] The fashion industry would decline.",
    "answer": "[A] Physical beauty would be redefined.",
    "questionType": "阅读理解",
    "distractorAnalysis": [
      {
        "option": "[B] New runways would be constructed.",
        "optionPoint": "1) New runways 2) would be constructed",
        "explanation": "原文第一段提到\"Its lawmakers gave preliminary approval last week to a law that would make it a crime to employ ultra-thin models on runways\"，这里的runways指的是时装秀的T台，而不是要建造新的T台。选项完全曲解了原文中runways的含义，将其理解为\"要建造新的跑道\"，属于对单词的错误理解。",
        "knowledgeTag": "望文生义"
      },{
        "option": "[C] Websites about dieting would thrive.",
        "optionPoint": "1) Websites about dieting 2) would thrive (繁荣)",
        "explanation": "原文第一段明确指出\"The parliament also agreed to ban websites that 'incite excessive thinness' by promoting extreme dieting\"，法国议会同意禁止那些通过推广极端节食来\"煽动过度瘦身\"的网站。而选项C却说\"关于节食的网站将会繁荣\"，与原文表述完全相反。原文是要禁止这类网站，而非让它们繁荣发展。",
        "knowledgeTag": "反向干扰"
      },
      {
        "option": "[D] The fashion industry would decline.",
        "optionPoint": "1) The fashion industry 2) would decline (衰落)",
        "explanation": "原文第一段只提到法国将立法禁止使用过度瘦弱的模特和煽动过度瘦身的网站，目的是重新定义女性美的标准，并没有任何信息表明这会导致时尚产业的衰落。选项D将法国对时尚产业的部分规范扩大解读为整个产业将会衰落，这是没有依据的推测。",
        "knowledgeTag": "过度推理"
      }
    ],
    "analysisStatus": "success"
  },
  {
    "questionNumber": "2016-22.0",
    "questionSource": "2016年英语（一）第22题",
    "fullText": "France, which prides itself as the global innovator of fashion, has decided its fashion industry has lost an absolute right to define physical beauty for women. Its lawmakers gave preliminary approval last week to a law that would make it a crime to employ ultra-thin models on runways. The parliament also agreed to ban websites that \"incite excessive thinness\" by promoting extreme dieting.\\n\\nSuch measures have a couple of uplifting motives. They suggest beauty should not be defined by looks that end up impinging on health. That's a start. And the ban on ultra-thin models seems to go beyond protecting models from starving themselves to death – as some have done. It tells the fashion industry that it must take responsibility for the signal it sends women, especially teenage girls, about the social tape-measure they must use to determine their individual worth.\\n\\nThe bans, if fully enforced, would suggest to women (and many men) that they should not let others be arbiters of their beauty. And perhaps faintly, they hint that people should look to intangible qualities like character and intellect rather than dieting their way to size zero or wasp-waist physiques.\\n\\nThe French measures, however, rely too much on severe punishment to change a culture that still regards beauty as skin-deep – and bone-showing. Under the law, using a fashion model that does not meet a government-defined index of body mass could result in a $85,000 fine and six months in prison.\\n\\nThe fashion industry knows it has an inherent problem in focusing on material adornment and idealized body types. In Denmark, the United States, and a few other countries, it is trying to set voluntary standards for models and fashion images that rely more on peer pressure for enforcement.\\n\\nIn contrast to France's actions, Denmark's fashion industry agreed last month on rules and sanctions regarding the age, health, and other characteristics of models. The newly revised Danish Fashion Ethical Charter clearly states: \"We are aware of and take responsibility for the impact the fashion industry has on body ideals, especially on young people.\" The charter's main tool of enforcement is to deny access for designers and modeling agencies to Copenhagen Fashion Week (CFW), which is run by the Danish Fashion Institute. But in general it relies on a name-and-shame method of compliance.\\n\\nRelying on ethical persuasion rather than law to address the misuse of body ideals may be the best step. Even better would be to help elevate notions of beauty beyond the material standards of a particular industry.",
    "question": "The phrase \"impinging on\" (Line 2, Para. 2) is closest in meaning to",
    "candidateAnswers": "[A] indicating the state of. [B] heightening the value of. [C] losing faith in. [D] doing harm to.",
    "answer": "[D] doing harm to.",
    "questionType": "阅读理解",
    "distractorAnalysis": [
      {
        "option": "[A] indicating the state of.",
        "optionPoint": "1. indicating: 表明，指示 2. the state of: 状态",
        "explanation": "原文中\"impinging on health\"出现在第二段，表达的是\"外表美的定义不应该以损害健康为代价\"。\"impinging on\"在此处表示\"侵害、损害\"的意义，而不是\"表明状态\"。\"indicating the state of\"意为\"表明...的状态\"，与原文中\"impinging on\"的侵害、损害含义不符。",
        "knowledgeTag": "望文生义（词句理解题）"
      },
      {
        "option": "[B] heightening the value of.",
        "optionPoint": "1. heightening: 提高，增强 2. the value of: ...的价值",
        "explanation": "\"heightening the value of\"意为\"提高...的价值\"，这与原文中\"impinging on health\"表达的\"损害健康\"含义完全相反。原文强调的是某些美的定义会对健康产生负面影响，而不是提高健康的价值。这是对\"impinging on\"一词含义的完全误解，将负面影响错误地理解为正面提升。",
        "knowledgeTag": "反向干扰"
      },
      {
        "option": "[C] losing faith in.",
        "optionPoint": "1. losing: 失去 2. faith in: 对...的信心",
        "explanation": "\"losing faith in\"意为\"对...失去信心\"，这与\"impinging on\"的实际含义不符。原文讨论的是某些美的标准对健康造成的实际伤害，而非对健康的信心或态度问题。\"impinging on\"在此处表示具体的侵害行为，而非信念或态度的改变。这是对词义的错误理解，将物理上的损害误解为心理上的态度变化。",
        "knowledgeTag": "偷换概念"
      }
    ],
    "analysisStatus": "success"
  },
  {
    "questionNumber": "2016-23.0",
    "questionSource": "2016年英语（一）第23题",
    "fullText": "France, which prides itself as the global innovator of fashion, has decided its fashion industry has lost an absolute right to define physical beauty for women. Its lawmakers gave preliminary approval last week to a law that would make it a crime to employ ultra-thin models on runways. The parliament also agreed to ban websites that \"incite excessive thinness\" by promoting extreme dieting.\\n\\nSuch measures have a couple of uplifting motives. They suggest beauty should not be defined by looks that end up impinging on health. That's a start. And the ban on ultra-thin models seems to go beyond protecting models from starving themselves to death – as some have done. It tells the fashion industry that it must take responsibility for the signal it sends women, especially teenage girls, about the social tape-measure they must use to determine their individual worth.\\n\\nThe bans, if fully enforced, would suggest to women (and many men) that they should not let others be arbiters of their beauty. And perhaps faintly, they hint that people should look to intangible qualities like character and intellect rather than dieting their way to size zero or wasp-waist physiques.\\n\\nThe French measures, however, rely too much on severe punishment to change a culture that still regards beauty as skin-deep – and bone-showing. Under the law, using a fashion model that does not meet a government-defined index of body mass could result in a $85,000 fine and six months in prison.\\n\\nThe fashion industry knows it has an inherent problem in focusing on material adornment and idealized body types. In Denmark, the United States, and a few other countries, it is trying to set voluntary standards for models and fashion images that rely more on peer pressure for enforcement.\\n\\nIn contrast to France's actions, Denmark's fashion industry agreed last month on rules and sanctions regarding the age, health, and other characteristics of models. The newly revised Danish Fashion Ethical Charter clearly states: \"We are aware of and take responsibility for the impact the fashion industry has on body ideals, especially on young people.\" The charter's main tool of enforcement is to deny access for designers and modeling agencies to Copenhagen Fashion Week (CFW), which is run by the Danish Fashion Institute. But in general it relies on a name-and-shame method of compliance.\\n\\nRelying on ethical persuasion rather than law to address the misuse of body ideals may be the best step. Even better would be to help elevate notions of beauty beyond the material standards of a particular industry.",
    "question": "Which of the following is true of the fashion industry?",
    "candidateAnswers": "[A] The French measures have already failed. [B] Its inherent problems are getting worse. [C] Models are no longer under peer pressure. [D] New standards are being set in Denmark.",
    "answer": "[D] New standards are being set in Denmark.",
    "questionType": "阅读理解",
    "distractorAnalysis": [
      {
        "option": "[A] The French measures have already failed.",
        "optionPoint": "1) French measures 2) have already failed",
        "explanation": "原文第四段提到法国措施\"rely too much on severe punishment to change a culture\"(过于依赖严厉惩罚来改变文化)，表明法国措施存在问题，但并未说这些措施已经失败。文章只是对法国措施提出质疑，认为其方法可能不是最佳选择，而非已经失败。这是对原文信息的过度推断。",
        "knowledgeTag": "过度推理"
      },
      {
        "option": "[B] Its inherent problems are getting worse.",
        "optionPoint": "1) inherent problems 2) getting worse",
        "explanation": "原文第五段确实提到时尚产业\"has an inherent problem in focusing on material adornment and idealized body types\"(在关注物质装饰和理想化身体类型方面存在固有问题)，但文中没有任何信息表明这些问题正在恶化(getting worse)。文章只是陈述问题的存在，并讨论不同国家应对这些问题的方法，没有提及问题的发展趋势。",
        "knowledgeTag": "无中生有"
      },
      {
        "option": "[C] Models are no longer under peer pressure.",
        "optionPoint": "1) models 2) no longer under peer pressure",
        "explanation": "原文第五段提到一些国家\"trying to set voluntary standards for models and fashion images that rely more on peer pressure for enforcement\"(试图为模特和时尚图像设定自愿标准，更多地依靠同行压力来执行)。这表明同行压力(peer pressure)仍然是行业自律的一种执行方式，而非模特不再受到同行压力。选项完全颠倒了原文的意思，与原文表述相反。",
        "knowledgeTag": "反向干扰"
      }
    ],
    "analysisStatus": "success"
  },
  {
    "questionNumber": "2016-24.0",
    "questionSource": "2016年英语（一）第24题",
    "fullText": "France, which prides itself as the global innovator of fashion, has decided its fashion industry has lost an absolute right to define physical beauty for women. Its lawmakers gave preliminary approval last week to a law that would make it a crime to employ ultra-thin models on runways. The parliament also agreed to ban websites that \"incite excessive thinness\" by promoting extreme dieting.\\n\\nSuch measures have a couple of uplifting motives. They suggest beauty should not be defined by looks that end up impinging on health. That's a start. And the ban on ultra-thin models seems to go beyond protecting models from starving themselves to death – as some have done. It tells the fashion industry that it must take responsibility for the signal it sends women, especially teenage girls, about the social tape-measure they must use to determine their individual worth.\\n\\nThe bans, if fully enforced, would suggest to women (and many men) that they should not let others be arbiters of their beauty. And perhaps faintly, they hint that people should look to intangible qualities like character and intellect rather than dieting their way to size zero or wasp-waist physiques.\\n\\nThe French measures, however, rely too much on severe punishment to change a culture that still regards beauty as skin-deep – and bone-showing. Under the law, using a fashion model that does not meet a government-defined index of body mass could result in a $85,000 fine and six months in prison.\\n\\nThe fashion industry knows it has an inherent problem in focusing on material adornment and idealized body types. In Denmark, the United States, and a few other countries, it is trying to set voluntary standards for models and fashion images that rely more on peer pressure for enforcement.\\n\\nIn contrast to France's actions, Denmark's fashion industry agreed last month on rules and sanctions regarding the age, health, and other characteristics of models. The newly revised Danish Fashion Ethical Charter clearly states: \"We are aware of and take responsibility for the impact the fashion industry has on body ideals, especially on young people.\" The charter's main tool of enforcement is to deny access for designers and modeling agencies to Copenhagen Fashion Week (CFW), which is run by the Danish Fashion Institute. But in general it relies on a name-and-shame method of compliance.\\n\\nRelying on ethical persuasion rather than law to address the misuse of body ideals may be the best step. Even better would be to help elevate notions of beauty beyond the material standards of a particular industry.",
    "question": "A designer is most likely to be rejected by CFW for",
    "candidateAnswers": "[A] pursuing perfect physical conditions. [B] caring too much about models' character. [C] showing little concern for health factors. [D] setting a high age threshold for models.",
    "answer": "[C] showing little concern for health factors.",
    "questionType": "阅读理解",
    "distractorAnalysis": [
      {
        "option": "[A] pursuing perfect physical conditions.",
        "optionPoint": "1) pursuing (追求) 2) perfect physical conditions (完美的身体条件)",
        "explanation": "原文第六段提到丹麦时尚道德宪章关注\"the age, health, and other characteristics of models\"(模特的年龄、健康和其他特征)，并且强调行业应对\"body ideals\"(身体理想)负责。但原文没有提到\"追求完美身体条件\"会导致设计师被拒绝参加哥本哈根时装周。相反，原文表明的是对健康因素的忽视才是被拒绝的原因，而非追求完美身体。这是对原文信息的歪曲和过度推断。",
        "knowledgeTag": "过度推理"
      },
      {
        "option": "[B] caring too much about models' character.",
        "optionPoint": "1) caring too much about (过分关心) 2) models' character (模特的品格)",
        "explanation": "原文第三段提到人们应该\"look to intangible qualities like character and intellect\"(关注品格和智力等无形品质)，这是作为对抗过度关注外表的积极建议。但文章从未暗示设计师\"过分关心模特品格\"会导致被哥本哈根时装周拒绝。这完全是无中生有的信息，与原文内容不符。实际上，关注模特品格应该是被鼓励的行为，而非被拒绝的理由。",
        "knowledgeTag": "无中生有"
      },
      {
        "option": "[D] setting a high age threshold for models.",
        "optionPoint": "1) setting (设定) 2) high age threshold (高年龄门槛) 3) for models (对模特)",
        "explanation": "原文第六段确实提到丹麦时尚道德宪章关注\"the age, health, and other characteristics of models\"(模特的年龄、健康和其他特征)，但没有具体说明什么样的年龄标准会导致设计师被拒绝。文中没有提到\"高年龄门槛\"这一概念，也没有暗示设定高年龄门槛会导致被拒绝参加哥本哈根时装周。这是对原文中提到的\"age\"一词的扩大解释，属于信息歪曲。",
        "knowledgeTag": "信息歪曲"
      }
    ],
    "analysisStatus": "success"
  },
  {
    "questionNumber": "2016-25.0",
    "questionSource": "2016年英语（一）第25题",
    "fullText": "France, which prides itself as the global innovator of fashion, has decided its fashion industry has lost an absolute right to define physical beauty for women. Its lawmakers gave preliminary approval last week to a law that would make it a crime to employ ultra-thin models on runways. The parliament also agreed to ban websites that \"incite excessive thinness\" by promoting extreme dieting.\\n\\nSuch measures have a couple of uplifting motives. They suggest beauty should not be defined by looks that end up impinging on health. That's a start. And the ban on ultra-thin models seems to go beyond protecting models from starving themselves to death – as some have done. It tells the fashion industry that it must take responsibility for the signal it sends women, especially teenage girls, about the social tape-measure they must use to determine their individual worth.\\n\\nThe bans, if fully enforced, would suggest to women (and many men) that they should not let others be arbiters of their beauty. And perhaps faintly, they hint that people should look to intangible qualities like character and intellect rather than dieting their way to size zero or wasp-waist physiques.\\n\\nThe French measures, however, rely too much on severe punishment to change a culture that still regards beauty as skin-deep – and bone-showing. Under the law, using a fashion model that does not meet a government-defined index of body mass could result in a $85,000 fine and six months in prison.\\n\\nThe fashion industry knows it has an inherent problem in focusing on material adornment and idealized body types. In Denmark, the United States, and a few other countries, it is trying to set voluntary standards for models and fashion images that rely more on peer pressure for enforcement.\\n\\nIn contrast to France's actions, Denmark's fashion industry agreed last month on rules and sanctions regarding the age, health, and other characteristics of models. The newly revised Danish Fashion Ethical Charter clearly states: \"We are aware of and take responsibility for the impact the fashion industry has on body ideals, especially on young people.\" The charter's main tool of enforcement is to deny access for designers and modeling agencies to Copenhagen Fashion Week (CFW), which is run by the Danish Fashion Institute. But in general it relies on a name-and-shame method of compliance.\\n\\nRelying on ethical persuasion rather than law to address the misuse of body ideals may be the best step. Even better would be to help elevate notions of beauty beyond the material standards of a particular industry.",
    "question": "Which of the following may be the best title of the text?",
    "candidateAnswers": "[A] The Great Threats to the Fashion Industry [B] Just Another Round of Struggle for Beauty [C] A Dilemma for the Starving Models in France [D] A Challenge to the Fashion Industry's Body Ideals",
    "answer": "[D] A Challenge to the Fashion Industry's Body Ideals",
    "questionType": "阅读理解",
    "distractorAnalysis": [
      {
        "option": "[A] The Great Threats to the Fashion Industry",
        "optionPoint": "1) Great Threats 重大威胁; 2) to the Fashion Industry 对时尚产业的",
        "explanation": "原文主要讨论法国立法禁止使用过度瘦弱的模特，以及丹麦等国家采取的自愿标准措施，目的是改变时尚产业对身体理想的定义。文章并未将这些措施描述为对时尚产业的\"重大威胁\"，而是将其定位为对时尚产业身体理想的\"挑战\"。第二段明确指出这些措施有\"uplifting motives\"(积极的动机)，第三段提到这些禁令暗示人们\"should not let others be arbiters of their beauty\"(不应让他人成为美的仲裁者)。这些表述都不支持\"重大威胁\"这一说法。",
        "knowledgeTag": "过度推理"
      },
      {
        "option": "[B] Just Another Round of Struggle for Beauty",
        "optionPoint": "1) Just Another Round 仅仅是另一轮; 2) Struggle for Beauty 为美而斗争",
        "explanation": "该选项暗示法国的立法措施只是关于美的标准的又一轮普通争论，这种表述轻视了文章所描述的具体行动的重要性。文章详细介绍了法国通过立法和丹麦通过行业自律来改变对身体理想的定义，这些都是具体的、有针对性的措施，而非简单的\"又一轮斗争\"。文章最后一段强调\"Relying on ethical persuasion rather than law\"(依靠道德说服而非法律)可能是最好的方法，表明这是一个关于方法论的深入讨论，而非简单的美学争论。",
        "knowledgeTag": "以偏概全"
      },
      {
        "option": "[C] A Dilemma for the Starving Models in France",
        "optionPoint": "1) A Dilemma 一个困境; 2) for the Starving Models 对挨饿的模特; 3) in France 在法国",
        "explanation": "这个选项将焦点错误地限定在\"法国挨饿模特的困境\"上，而文章的范围和主题远比这广泛。虽然第二段确实提到了保护模特免于\"starving themselves to death\"(饿死自己)，但这只是文章讨论的一个小方面。文章主要关注的是时尚产业对女性身体理想的定义，以及法国和其他国家如何通过不同方式(法律或自律)来改变这种情况。文章第五、六段还扩展到了丹麦和美国等其他国家的做法，明显超出了\"法国模特\"这一范围。",
        "knowledgeTag": "范围扩大"
      }
    ],
    "analysisStatus": "success"
  }
      // ... 其余干扰项 ...
  // ... 其余题目 ...
];

// 解析选项字符串为数组
function parseCandidateAnswers(answerString) {
    console.log('解析选项:', answerString);
    
    // 处理空值
    if (!answerString) {
        console.warn('选项为空，返回空数组');
        return [];
    }
    
    if (Array.isArray(answerString)) {
        console.log('选项已是数组格式');
        return answerString;
    }
    
    if (typeof answerString !== 'string') {
        console.warn('选项不是字符串格式:', typeof answerString);
        return [];
    }
    
    // 使用简单的分割方法
    const parts = answerString.split(/\[[A-D]\]/).filter(part => part.trim());
    console.log('分割后的部分:', parts);
    
    if (parts.length >= 4) {
        const options = [
            `[A] ${parts[0].trim()}`,
            `[B] ${parts[1].trim()}`,
            `[C] ${parts[2].trim()}`,
            `[D] ${parts[3].trim()}`
        ];
        console.log('解析结果:', options);
        return options;
    }
    
    // 如果分割方法失败，尝试正则表达式方法
    const optionRegex = /\[([A-D])\]\s*([^[]+?)(?=\s*\[[A-D]\]|$)/g;
    const options = [];
    let match;
    
    while ((match = optionRegex.exec(answerString)) !== null) {
        const option = `[${match[1]}] ${match[2].trim()}`;
        options.push(option);
    }
    
    console.log('正则解析结果:', options);
    return options;
}

// 初始化 elements 对象
function initializeElements() {
    window.elements = {
        articleContent: document.getElementById('articleContent'),
        questionText: document.getElementById('questionText'),
        optionsContainer: document.getElementById('optionsContainer'),
        answerResult: document.getElementById('answerResult'),
        analysisContainer: document.getElementById('analysisContainer'),
        locateWord: document.getElementById('locateWord'),
        locateSentence: document.getElementById('locateSentence'),
        keySentence: document.getElementById('keySentence'),
        translation: document.getElementById('translation'),
        explanation: document.getElementById('explanation'),
        distractorItems: document.getElementById('distractorItems'),
        showAnalysisBtn: document.getElementById('showAnalysisBtn'),
        similarQuestionsBtn: document.getElementById('similarQuestionsBtn'),
        similarModal: document.getElementById('similarModal'),
        similarArticleContent: document.getElementById('similarArticleContent'),
        similarQuestionText: document.getElementById('similarQuestionText'),
        similarOptions: document.getElementById('similarOptions'),
        similarResult: document.getElementById('similarResult'),
        similarAnalysisContainer: document.getElementById('similarAnalysisContainer'),
        similarDistractorContainer: document.getElementById('similarDistractorContainer'),
        similarLocateWord: document.getElementById('similarLocateWord'),
        similarLocateSentence: document.getElementById('similarLocateSentence'),
        similarKeySentence: document.getElementById('similarKeySentence'),
        similarTranslation: document.getElementById('similarTranslation'),
        similarExplanation: document.getElementById('similarExplanation'),
        similarDistractorItems: document.getElementById('similarDistractorItems'),
        similarShowAnalysisBtn: document.getElementById('similarShowAnalysisBtn'),
        closeModalBtn: document.getElementById('closeModalBtn'),
        returnBtn: document.getElementById('returnBtn')
    };
}

// 初始化应用
async function initApp() {
    console.log('开始初始化应用...');
    
    // 先初始化 elements
    initializeElements();
    console.log('elements 初始化完成');
    
    await loadAllData();
    console.log('数据加载完成，开始渲染...');
    
    renderQuestionList();
    loadQuestion(appState.allQuestions[0]?.questionNumber || '201129');
    bindEvents();
    
    console.log('应用初始化完成');
}

// 加载所有数据
async function loadAllData() {
    try {
        console.log('开始加载数据...');
        console.log('题目数据长度:', questionJson.length);
        console.log('干扰项数据长度:', distractorJson.length);
        
        appState.allQuestions = [];
        questionData = {};
        distractorData = {};
        
        // 处理题目数据
        console.log('开始处理题目数据...');
        questionJson.forEach((item, index) => {
            console.log(`处理第 ${index + 1} 题:`, item.questionNumber);
            console.log('原始选项:', item.candidateAnswers);
            
            item.candidateAnswers = parseCandidateAnswers(item.candidateAnswers);
            questionData[item.questionNumber] = item;
            appState.allQuestions.push(item);
        });
        
        // 处理干扰项数据
        console.log('开始处理干扰项数据...');
        distractorJson.forEach((item, index) => {
            console.log(`处理第 ${index + 1} 个干扰项:`, item.questionNumber);
            
            item.candidateAnswers = parseCandidateAnswers(item.candidateAnswers);
            if (questionData[item.questionNumber]) {
                questionData[item.questionNumber].distractorAnalysis = item.distractorAnalysis || [];
            } else {
                questionData[item.questionNumber] = {
                    ...item,
                    distractorAnalysis: item.distractorAnalysis || []
                };
                appState.allQuestions.push(questionData[item.questionNumber]);
            }
        });
        
        // 按题号排序
        appState.allQuestions.sort((a, b) => a.questionNumber.localeCompare(b.questionNumber));
        console.log(`最终 allQuestions 长度: ${appState.allQuestions.length}`);
        console.log('题号示例:', appState.allQuestions.map(q => q.questionNumber).slice(0, 10));
        
        if (appState.allQuestions.length === 0) {
            console.warn('没有加载到任何题目，使用默认数据');
            loadDefaultData();
        }
    } catch (error) {
        console.error('加载数据失败:', error);
        loadDefaultData();
    }
}

// 加载默认数据（当JSON文件加载失败时使用）
function loadDefaultData() {
    const defaultQuestion = {
        questionNumber: "201129",
        questionSource: "2011年英语（一）第29题",
        fullText: `"When Liam McGee departed as president of Bank of America in August, his explanation was surprisingly straight up. Rather than cloaking his exit in the usual vague excuses, he came right out and said he was leaving \"to pursue my goal of running a company.\" Broadcasting his ambition was \"very much my decision,\" McGee says. Within two weeks, he was talking for the first time with the board of Hartford Financial Services Group, which named him CEO and chairman on September 29. McGee says leaving without a position lined up gave him time to reflect on what kind of company he wanted to run. It also sent a clear message to the outside world about his aspirations. And McGee isn't alone. In recent weeks the No.2 executives at Avon and American Express quit with the explanation that they were looking for a CEO post. As boards scrutinize succession plans in response to shareholder pressure, executives who don't get the nod also may wish to move on. A turbulent business environment also has senior managers cautious of letting vague pronouncements cloud their reputations. As the first signs of recovery begin to take hold, deputy chiefs may be more willing to make the jump without a net."`,
        question: "It can be inferred from the last paragraph that______",
        candidateAnswers: [
            "[A] top performers used to cling to their posts.",
            "[B] loyalty of top performers is getting out-dated.",
            "[C] top performers care more about reputations.",
            "[D] it's safer to stick to the traditional rules."
        ],
        answer: "[A] top performers used to cling to their posts.",
        questionType: "阅读题",
        locateWord: "top performers, cling, posts, traditional",
        questionTypeTag: "推理题",
        locateSentence: "As boards scrutinize succession plans in response to shareholder pressure, executives who don't get the nod also may wish to move on.",
        keySentence: "As boards scrutinize succession plans in response to shareholder pressure, executives who don't get the nod also may wish to move on.",
        knowledgeTag: "推理题关键句定位",
        translation: "当董事会因股东压力而审查继任计划时，那些没有得到认可的 executives 也可能希望离开。",
        explanation: "这道题目是一道推理题，需要从最后一段推断出结论。根据关键句'As boards scrutinize succession plans in response to shareholder pressure, executives who don't get the nod also may wish to move on'，可以推断出高管们不再像以前那样坚守岗位，而是更愿意主动离开寻找新的机会。因此正确答案是A选项。",
        distractorAnalysis: [
            {
                option: "[B] loyalty of top performers is getting out-dated.",
                optionPoint: "1) loyalty 2) top performers 3) out-dated",
                explanation: "B选项错误地认为忠诚度过时了，但原文并没有直接表达这个观点，属于过度推理。",
                knowledgeTag: "过度推理"
            },
            {
                option: "[C] top performers care more about reputations.",
                optionPoint: "1) top performers 2) care more 3) reputations",
                explanation: "C选项虽然提到了声誉，但原文中并没有直接比较高管们是否更关心声誉，属于信息歪曲。",
                knowledgeTag: "信息歪曲"
            },
            {
                option: "[D] it's safer to stick to the traditional rules.",
                optionPoint: "1) safer 2) stick to 3) traditional rules",
                explanation: "D选项与原文意思相反，原文表明高管们更愿意冒险离开，而不是坚持传统规则，属于反向干扰。",
                knowledgeTag: "反向干扰"
            }
        ],
        analysisStatus: "success"
    };
    
    questionData["201129"] = defaultQuestion;
    appState.allQuestions = [defaultQuestion];
}

// 渲染题号列表
function renderQuestionList() {
    const questionList = document.getElementById('questionList');
    
    questionList.innerHTML = appState.allQuestions.map((question, index) => {
        const isActive = question.questionNumber === appState.currentQuestion?.questionNumber;
        const isCompleted = appState.completedQuestions.has(question.questionNumber);
        
        let className = 'question-item';
        if (isActive) className += ' active';
        if (isCompleted) className += ' completed';
        
        return `
            <div class="${className}" onclick="switchQuestion('${question.questionNumber}')">
                ${question.questionNumber}
            </div>
        `;
    }).join('');
}

// 切换题目
function switchQuestion(questionNumber) {
    loadQuestion(questionNumber);
    updateQuestionList();
}

// 更新题号列表状态
function updateQuestionList() {
    const questionItems = document.querySelectorAll('.question-item');
    
    questionItems.forEach(item => {
        const questionNumber = item.textContent.trim();
        item.classList.remove('active', 'completed');
        
        if (questionNumber === appState.currentQuestion?.questionNumber) {
            item.classList.add('active');
        } else if (appState.completedQuestions.has(questionNumber)) {
            item.classList.add('completed');
        }
    });
}

// 加载题目数据
function loadQuestion(questionNumber) {
    const data = questionData[questionNumber];
    if (!data) return;
    
    appState.currentQuestion = data;
    appState.currentQuestionIndex = appState.allQuestions.findIndex(q => q.questionNumber === questionNumber);
    
    // 更新页面标题信息
    document.getElementById('currentQuestionNumber').textContent = data.questionNumber;
    document.getElementById('currentQuestionSource').textContent = data.questionSource;
    
    renderQuestion(data);
    updateQuestionList();
}

// 渲染题目
function renderQuestion(data) {
    // 渲染原文
    renderArticle(data.fullText);
    
    // 渲染问题
    elements.questionText.innerHTML = makeTextClickable(data.question);
    
    // 渲染选项
    renderOptions(data.candidateAnswers);
    
    // 重置状态
    appState.isAnswered = false;
    appState.showAnalysis = false;
    elements.answerResult.style.display = 'none';
    elements.analysisContainer.style.display = 'none';
}

// 渲染原文
function renderArticle(text) {
    console.log('原始文本:', text);
    
    // 处理换行符
    // 将 \n\n 替换为段落分隔符，将 \n 替换为 <br>
    let processedText = text
        .replace(/\\n\\n/g, '\n\n')  // 先处理转义的 \n\n
        .replace(/\\n/g, '\n')       // 再处理转义的 \n
        .replace(/\n\n/g, '</p><p>') // 双换行作为段落分隔
        .replace(/\n/g, '<br>');     // 单换行作为换行
    
    console.log('处理后的文本:', processedText);
    
    // 确保文本被段落标签包围
    if (!processedText.startsWith('<p>')) {
        processedText = '<p>' + processedText;
    }
    if (!processedText.endsWith('</p>')) {
        processedText = processedText + '</p>';
    }
    
    // 将处理后的HTML内容设置为innerHTML
    elements.articleContent.innerHTML = processedText;
    
    // 为每个段落中的文本添加可点击功能
    const paragraphs = elements.articleContent.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.innerHTML = makeTextClickable(paragraph.innerHTML);
    });
}

// 使文本可点击
function makeTextClickable(text) {
    // 处理包含特殊字符的文本
    return text.split(' ').map(word => {
        // 跳过空字符串
        if (!word.trim()) return word;
        
        // 所有单词都支持点击，默认无高亮
        return `<span class="clickable-word" onclick="highlightWord(this)">${word}</span>`;
    }).join(' ');
}

// 高亮单词
function highlightWord(element) {
    // 阻止事件冒泡，避免触发父元素的点击事件
    event.stopPropagation();
    element.classList.toggle('selected');
}

// 渲染选项
function renderOptions(options) {
    elements.optionsContainer.innerHTML = options.map((option, index) => {
        const letter = String.fromCharCode(65 + index); // A, B, C, D
        return `
            <div class="option-item" onclick="selectOption(this, '${option}')">
                <div class="option-letter">${letter}</div>
                <div class="option-text">${makeTextClickable(option)}</div>
            </div>
        `;
    }).join('');
}

// 选择选项
function selectOption(element, optionText) {
    if (appState.isAnswered) return;
    
    // 清除之前的选择
    document.querySelectorAll('.option-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    // 标记当前选择
    element.classList.add('selected');
    appState.userAnswer = optionText;
    
    // 提交答案
    submitAnswer();
}

// 提交答案
function submitAnswer() {
    if (!appState.userAnswer || !appState.currentQuestion) return;
    
    appState.isAnswered = true;
    
    const isCorrect = appState.userAnswer === appState.currentQuestion.answer;
    
    // 记录已完成的题目
    appState.completedQuestions.add(appState.currentQuestion.questionNumber);
    
    // 显示结果
    showAnswerResult(isCorrect);
    
    // 标记选项
    markOptions();
    
    // 更新题号列表
    updateQuestionList();
}

// 显示答题结果
function showAnswerResult(isCorrect) {
    const resultMessage = elements.answerResult.querySelector('.result-message');
    
    if (isCorrect) {
        resultMessage.textContent = '✓ 回答正确！';
        resultMessage.className = 'result-message correct';
    } else {
        resultMessage.textContent = '✗ 回答错误';
        resultMessage.className = 'result-message incorrect';
    }
    
    elements.answerResult.style.display = 'block';
}

// 标记选项
function markOptions() {
    const options = document.querySelectorAll('.option-item');
    const correctAnswer = appState.currentQuestion.answer;
    
    options.forEach(option => {
        const optionText = option.querySelector('.option-text').textContent;
        
        if (optionText === correctAnswer) {
            option.classList.add('correct');
        } else if (optionText === appState.userAnswer && appState.userAnswer !== correctAnswer) {
            option.classList.add('incorrect');
        }
    });
}

// 显示解析
function showAnalysis() {
    if (!appState.currentQuestion) return;
    
    const data = appState.currentQuestion;
    
    // 填充解析数据
    elements.locateWord.textContent = data.locateWord || '';
    elements.locateSentence.textContent = data.locateSentence || '';
    elements.keySentence.textContent = data.keySentence || '';
    elements.translation.textContent = data.translation || '';
    elements.explanation.textContent = data.explanation || '';
    
    // 获取干扰项分析数据
    const distractorAnalysis = data.distractorAnalysis || [];
    
    // 渲染干扰项分析
    renderDistractorAnalysis(distractorAnalysis);
    
    // 标记原文中的关键句
    markKeySentences();
    
    elements.analysisContainer.style.display = 'block';
    appState.showAnalysis = true;
}

// 渲染干扰项分析
function renderDistractorAnalysis(distractors) {
    elements.distractorItems.innerHTML = distractors.map(distractor => `
        <div class="distractor-item">
            <div class="distractor-header" onclick="toggleDistractor(this)">
                <span class="distractor-option">${distractor.option}</span>
                <span class="distractor-tag">${distractor.knowledgeTag}</span>
            </div>
            <div class="distractor-content">
                <div class="distractor-points">${distractor.optionPoint}</div>
                <div class="distractor-explanation">${distractor.explanation}</div>
            </div>
        </div>
    `).join('');
}

// 切换干扰项显示
function toggleDistractor(header) {
    const content = header.nextElementSibling;
    content.classList.toggle('show');
}

// 标记关键句
function markKeySentences() {
    const articleContent = elements.articleContent;
    const locateSentence = appState.currentQuestion.locateSentence;
    const keySentence = appState.currentQuestion.keySentence;
    
    // 标记定位句
    if (locateSentence) {
        highlightSentence(articleContent, locateSentence, 'locate-sentence');
        // 为包含定位句的段落添加背景色
        highlightParagraphWithSentence(articleContent, locateSentence);
    }
    
    // 标记关键句
    if (keySentence) {
        highlightSentence(articleContent, keySentence, 'key-sentence');
    }
}

// 高亮句子
function highlightSentence(container, sentence, className) {
    const text = container.textContent;
    const index = text.indexOf(sentence);
    
    if (index !== -1) {
        const before = text.substring(0, index);
        const after = text.substring(index + sentence.length);
        
        // 重新处理文本，保持单词可点击
        const processedBefore = makeTextClickable(before);
        const processedAfter = makeTextClickable(after);
        
        container.innerHTML = `
            ${processedBefore}<span class="${className}">${sentence}</span>${processedAfter}
        `;
    }
}

// 为包含定位句的段落添加背景色
function highlightParagraphWithSentence(container, sentence) {
    const paragraphs = container.querySelectorAll('p');
    
    paragraphs.forEach(paragraph => {
        const text = paragraph.textContent;
        if (text.includes(sentence)) {
            paragraph.classList.add('locate-paragraph');
        }
    });
}

// 显示相似题
function showSimilarQuestion() {
    // 根据当前题目获取对应的相似题
    const currentQuestionNumber = appState.currentQuestion?.questionNumber;
    const similarData = similarQuestionData[currentQuestionNumber];
    
    if (!similarData) {
        console.warn('未找到对应的相似题:', currentQuestionNumber);
        return;
    }
    
    appState.similarQuestion = similarData;
    
    // 处理相似题选项
    similarData.candidateAnswers = parseCandidateAnswers(similarData.candidateAnswers);
    
    // 渲染相似题文章
    renderSimilarArticle(similarData.fullText);
    
    // 渲染相似题问题
    elements.similarQuestionText.innerHTML = makeTextClickable(similarData.question);
    
    // 渲染相似题选项
    renderSimilarOptions(similarData.candidateAnswers);
    
    // 隐藏相似题解析和干扰项（默认折叠）
    elements.similarAnalysisContainer.style.display = 'none';
    elements.similarDistractorContainer.style.display = 'none';
    
    // 显示模态框
    elements.similarModal.style.display = 'block';
    
    // 重置相似题状态
    appState.similarAnswered = false;
    elements.similarResult.style.display = 'none';
}

// 渲染相似题文章
function renderSimilarArticle(text) {
    console.log('相似题原始文本:', text);
    
    // 处理换行符
    let processedText = text
        .replace(/\\n\\n/g, '\n\n')  // 先处理转义的 \n\n
        .replace(/\\n/g, '\n')       // 再处理转义的 \n
        .replace(/\n\n/g, '</p><p>') // 双换行作为段落分隔
        .replace(/\n/g, '<br>');     // 单换行作为换行
    
    console.log('相似题处理后的文本:', processedText);
    
    // 确保文本被段落标签包围
    if (!processedText.startsWith('<p>')) {
        processedText = '<p>' + processedText;
    }
    if (!processedText.endsWith('</p>')) {
        processedText = processedText + '</p>';
    }
    
    // 将处理后的HTML内容设置为innerHTML
    elements.similarArticleContent.innerHTML = processedText;
    
    // 为每个段落中的文本添加可点击功能
    const paragraphs = elements.similarArticleContent.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.innerHTML = makeTextClickable(paragraph.innerHTML);
    });
}

// 渲染相似题选项
function renderSimilarOptions(options) {
    elements.similarOptions.innerHTML = options.map((option, index) => {
        const letter = String.fromCharCode(65 + index);
        return `
            <div class="similar-option" onclick="selectSimilarOption(this, '${option}')">
                <div class="option-letter">${letter}</div>
                <div class="option-text">${makeTextClickable(option)}</div>
            </div>
        `;
    }).join('');
}

// 选择相似题选项
function selectSimilarOption(element, optionText) {
    if (appState.similarAnswered) return;
    
    // 清除之前的选择
    document.querySelectorAll('.similar-option').forEach(item => {
        item.classList.remove('selected');
    });
    
    // 标记当前选择
    element.classList.add('selected');
    
    // 检查答案
    const isCorrect = optionText === appState.similarQuestion.answer;
    
    // 标记选项
    markSimilarOptions(isCorrect, optionText);
    
    // 显示结果
    showSimilarResult(isCorrect);
    
    appState.similarAnswered = true;
}

// 标记相似题选项
function markSimilarOptions(isCorrect, userAnswer) {
    const options = document.querySelectorAll('.similar-option');
    const correctAnswer = appState.similarQuestion.answer;
    
    options.forEach(option => {
        const optionText = option.querySelector('.option-text').textContent;
        
        if (optionText === correctAnswer) {
            option.classList.add('correct');
        } else if (optionText === userAnswer && userAnswer !== correctAnswer) {
            option.classList.add('incorrect');
        }
    });
}

// 显示相似题结果
function showSimilarResult(isCorrect) {
    const resultText = isCorrect ? '✓ 回答正确！' : '✗ 回答错误';
    const resultClass = isCorrect ? 'correct' : 'incorrect';
    
    elements.similarResult.textContent = resultText;
    elements.similarResult.className = `similar-result ${resultClass}`;
    elements.similarResult.style.display = 'block';
}

// 显示相似题解析
function showSimilarAnalysis() {
    if (!appState.similarQuestion) return;
    
    const data = appState.similarQuestion;
    
    // 填充相似题解析数据
    elements.similarLocateWord.textContent = data.locateWord || '';
    elements.similarLocateSentence.textContent = data.locateSentence || '';
    elements.similarKeySentence.textContent = data.keySentence || '';
    elements.similarTranslation.textContent = data.translation || '';
    elements.similarExplanation.textContent = data.explanation || '';
    
    // 获取相似题干扰项分析数据
    const distractorAnalysis = data.distractorAnalysis || [];
    
    // 渲染相似题干扰项分析
    renderSimilarDistractorAnalysis(distractorAnalysis);
    
    // 标记相似题原文中的关键句
    markSimilarKeySentences();
    
    elements.similarAnalysisContainer.style.display = 'block';
    elements.similarDistractorContainer.style.display = 'block';
}

// 渲染相似题干扰项分析
function renderSimilarDistractorAnalysis(distractors) {
    elements.similarDistractorItems.innerHTML = distractors.map(distractor => `
        <div class="distractor-item">
            <div class="distractor-header" onclick="toggleDistractor(this)">
                <span class="distractor-option">${distractor.option}</span>
                <span class="distractor-tag">${distractor.knowledgeTag}</span>
            </div>
            <div class="distractor-content">
                <div class="distractor-points">${distractor.optionPoint}</div>
                <div class="distractor-explanation">${distractor.explanation}</div>
            </div>
        </div>
    `).join('');
}

// 标记相似题关键句
function markSimilarKeySentences() {
    const articleContent = elements.similarArticleContent;
    const locateSentence = appState.similarQuestion.locateSentence;
    const keySentence = appState.similarQuestion.keySentence;
    
    // 标记定位句
    if (locateSentence) {
        highlightSimilarSentence(articleContent, locateSentence, 'locate-sentence');
        // 为包含定位句的段落添加背景色
        highlightSimilarParagraphWithSentence(articleContent, locateSentence);
    }
    
    // 标记关键句
    if (keySentence) {
        highlightSimilarSentence(articleContent, keySentence, 'key-sentence');
    }
}

// 高亮相似题句子
function highlightSimilarSentence(container, sentence, className) {
    const text = container.textContent;
    const index = text.indexOf(sentence);
    
    if (index !== -1) {
        const before = text.substring(0, index);
        const after = text.substring(index + sentence.length);
        
        // 重新处理文本，保持单词可点击
        const processedBefore = makeTextClickable(before);
        const processedAfter = makeTextClickable(after);
        
        container.innerHTML = `
            ${processedBefore}<span class="${className}">${sentence}</span>${processedAfter}
        `;
    }
}

// 为包含相似题定位句的段落添加背景色
function highlightSimilarParagraphWithSentence(container, sentence) {
    const paragraphs = container.querySelectorAll('p');
    
    paragraphs.forEach(paragraph => {
        const text = paragraph.textContent;
        if (text.includes(sentence)) {
            paragraph.classList.add('locate-paragraph');
        }
    });
}

// 关闭模态框
function closeModal() {
    elements.similarModal.style.display = 'none';
}

// 返回原题
function returnToOriginal() {
    closeModal();
    // 可以在这里添加返回原题的逻辑
}

// 绑定事件
function bindEvents() {
    // 查看解析按钮
    elements.showAnalysisBtn.addEventListener('click', showAnalysis);
    
    // 相似题按钮
    elements.similarQuestionsBtn.addEventListener('click', showSimilarQuestion);
    
    // 相似题解析按钮
    if (elements.similarShowAnalysisBtn) {
        elements.similarShowAnalysisBtn.addEventListener('click', showSimilarAnalysis);
    }
    
    // 关闭模态框
    elements.closeModalBtn.addEventListener('click', closeModal);
    elements.returnBtn.addEventListener('click', returnToOriginal);
    
    // 顶栏切换按钮
    const navToggle = document.getElementById('navToggle');
    const navContent = document.getElementById('navContent');
    
    navToggle.addEventListener('click', () => {
        navContent.classList.toggle('expanded');
    });
    
    // 点击模态框外部关闭
    elements.similarModal.addEventListener('click', (e) => {
        if (e.target === elements.similarModal) {
            closeModal();
        }
    });
    
    // 键盘事件
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// 全局函数（用于HTML中的onclick）
window.highlightWord = highlightWord;
window.selectOption = selectOption;
window.toggleDistractor = toggleDistractor;
window.selectSimilarOption = selectSimilarOption;
window.showSimilarAnalysis = showSimilarAnalysis;
window.switchQuestion = switchQuestion;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initApp); 