// 全局状态管理
class AppState {
    constructor() {
        this.currentQuestion = null;
        this.userAnswer = null;
        this.isAnswered = false;
        this.showAnalysis = false;
        this.similarQuestion = null;
        this.similarAnswered = false;
    }
}

const appState = new AppState();

// 模拟数据
const questionData = {
    "201129": {
        questionNumber: "2019-29",
        questionSource: "2019年英语（一）第29题",
        fullText: "Grade inflation – the gradual increase in average GPAs (grade-point averages) over the past few decades – is often considered a product of a consumer era in higher education, in which students are treated like customers to be pleased. But another, related force – a policy often buried deep in course catalogs called \"grade forgiveness\" – is helping raise GPAs.\\n\\nGrade forgiveness allows students to retake a course in which they received a low grade, and the most recent grade or the highest grade is the only one that counts in calculating a student's overall GPA.\\n\\nThe use of this little-known practice has accelerated in recent years, as colleges continue to do their utmost to keep students in school (and paying tuition) and improve their graduation rates. When this practice first started decades ago, it was usually limited to freshmen, to give them a second chance to take a class in their first year if they struggled in their transition to college-level courses. But now most colleges, save for many selective campuses, allow all undergraduates, and even graduate students, to get their low grades forgiven.\\n\\nCollege officials tend to emphasize that the goal of grade forgiveness is less about the grade itself and more about encouraging students to retake courses critical to their degree program and graduation without incurring a big penalty. \"Ultimately,\" said Jack Miner, Ohio State University's registrar, \"we see students achieve more success because they retake a course and do better in subsequent courses or master the content that allows them to graduate on time.\"\\n\\nThat said, there is a way in which grade forgiveness satisfies colleges' own needs as well. For public institutions, state funds are sometimes tied partly to their success on metrics such as graduation rates and student retention – so better grades can, by boosting figures like those, mean more money. And anything that raises GPAs will likely make students – who, at the end of the day, are paying the bill – feel they've gotten a better value for their tuition dollars, which is another big concern for colleges.\\n\\nIndeed, grade forgiveness is just another way that universities are responding to consumers' expectations for higher education. Since students and parents expect a college degree to lead to a job, it is in the best interest of a school to turn out graduates who are as qualified as possible – or at least appear to be. On this, students' and colleges' incentives seem to be aligned.",
        question: "What does the phrase \"to be aligned\" (Line 5, Para. 6) most probably mean?",
        candidateAnswers: [
            "[A] To counterbalance each other.",
            "[B] To complement each other.",
            "[C] To be identical with each other.",
            "[D] To be contradictory to each other."
        ],
        answer: "[C] To be identical with each other.",
        questionType: "阅读题",
        locateWord: "aligned",
        questionTypeTag: "词句理解题",
        locateSentence: "Indeed, grade forgiveness is just another way that universities are responding to consumers' expectations for higher education. Since students and parents expect a college degree to lead to a job, it is in the best interest of a school to turn out graduates who are as qualified as possible – or at least appear to be. On this, students' and colleges' incentives seem to be aligned.",
        keySentence: "On this, students' and colleges' incentives seem to be aligned.",
        knowledgeTag: "词句理解题关键句定位",
        translation: "在这一点上，学生和大学的动机似乎是一致的。",
        explanation: "这道词句理解题要求理解\"to be aligned\"的含义。首先通过题干中的定位词\"aligned\"在原文最后一段找到定位句。根据词句理解题解题技巧，需要分析上下文来理解该词的含义。\n\n在最后一段中，作者先指出\"grade forgiveness是大学响应消费者对高等教育期望的另一种方式\"，然后解释了学生和家长期望大学学位能带来工作，因此学校的最佳利益是培养出尽可能合格的毕业生。最后一句\"On this, students' and colleges' incentives seem to be aligned\"中的\"On this\"指的是前面提到的共同目标：让毕业生看起来尽可能合格。\n\n通过分析上下文可以看出，\"aligned\"在这里表示学生和大学的动机或利益是一致的、相同的。学生希望获得好成绩以便找到好工作，大学也希望学生获得好成绩以提高学校的指标和吸引力。这两方的目标是相同的，而不是互补、对立或平衡的关系。\n\n因此，\"to be aligned\"在这里的意思是\"相同的、一致的\"，对应选项[C] To be identical with each other（彼此相同）。",
        distractorAnalysis: [
            {
                option: "[A] To counterbalance each other.",
                optionPoint: "1) counterbalance - 抵消、平衡; 2) each other - 相互",
                explanation: "这个选项的意思是\"相互抵消/平衡\"。原文最后一句提到\"On this, students' and colleges' incentives seem to be aligned\"，意思是\"在这一点上，学生和大学的动机似乎是一致的\"。前文解释了学生希望获得好成绩以显示自己有资格获得工作，而大学也希望培养出看起来有资格的毕业生。这表明双方的利益是一致的，而非相互抵消或平衡的关系。\"counterbalance\"暗示两种力量相互对立并达到平衡，但原文强调的是双方利益的一致性，而非对立性。因此，\"counterbalance\"与原文表达的\"aligned\"(一致、协调)的含义不符。",
                knowledgeTag: "偷换概念"
            },
            {
                option: "[B] To complement each other.",
                optionPoint: "1) complement - 互补、补充; 2) each other - 相互",
                explanation: "这个选项的意思是\"相互补充\"。\"complement\"表示两个不同的事物相互补充，形成一个完整的整体，强调的是差异性和互补性。然而，原文中的\"aligned\"强调的是学生和大学的动机或利益是一致的、方向相同的。原文最后一段说明学生希望通过学位获得工作，大学也希望培养出合格(或看起来合格)的毕业生，这两者的目标是一致的，而非互补的。\"complement\"暗示两者有所不同但能相互补充，而原文强调的是两者目标的相同性。因此，\"complement\"与原文表达的\"aligned\"(一致、协调)的含义不符。",
                knowledgeTag: "偷换概念"
            },
            {   
                option: "[D] To be contradictory to each other.",
                optionPoint: "1) contradictory - 矛盾的、相反的; 2) to each other - 相互",
                explanation: "这个选项的意思是\"相互矛盾\"。\"contradictory\"表示两者之间存在矛盾或冲突，这与原文中\"aligned\"(一致、协调)的含义完全相反。原文最后一段明确指出学生和大学的利益是一致的(\"students' and colleges' incentives seem to be aligned\")，学生希望通过学位获得工作，大学也希望培养出合格的毕业生，两者的目标方向是一致的，而非相互矛盾的。选项D与原文表达的意思完全相反，是一个典型的反向干扰选项。",
                knowledgeTag: "反向干扰"
            }
        ],
        analysisStatus: "success"
    }
};

const similarQuestionData = {
    "201026": {
        questionNumber: "201422",
        questionSource: "2014年英语（一）第22题",
        paragraph: "More apparent reasonableness followed. There will now be a seven-day wait   for the jobseeker’s allowance. \“Those first few days should be spent looking for work, not looking to sign on,\” he claimed. \“We’re doing these things because we know they help people stay off benefits and help those on benefits get into work faster.\” Help? Really? On first hearing, this was the socially concerned chancellor, trying to change lives for the better, complete with \“reforms\” to an obviously indulgent system that demands too little effort from the newly unemployed to find work, and subsidises laziness. What motivated him,  we  were to understand, was his zeal for \“fundamental fairness\” – protecting the taxpayer, controlling spending and ensuring that only the most deserving claimants received their benefits.",
        question: "Business-method patents have recently aroused concern because of______",
        candidateAnswers: [
            "[A] to check on the availability of jobs at the jobcentre.",
            "[B] to accept the government's restrictions on the allowance.",
            "[C] to register for an allowance from the government.",
            "[D] to attend a governmental job-training program."
        ],
        answer: "[C] to register for an allowance from the government.",
        questionType: "阅读题"
    }
};

// DOM元素
const elements = {
    articleContent: document.getElementById('articleContent'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    answerResult: document.getElementById('answerResult'),
    analysisContainer: document.getElementById('analysisContainer'),
    showAnalysisBtn: document.getElementById('showAnalysisBtn'),
    similarQuestionsBtn: document.getElementById('similarQuestionsBtn'),
    similarModal: document.getElementById('similarModal'),
    closeModalBtn: document.getElementById('closeModalBtn'),
    returnBtn: document.getElementById('returnBtn'),
    similarArticleContent: document.getElementById('similarArticleContent'),
    similarQuestionText: document.getElementById('similarQuestionText'),
    similarOptions: document.getElementById('similarOptions'),
    similarResult: document.getElementById('similarResult'),
    locateWord: document.getElementById('locateWord'),
    locateSentence: document.getElementById('locateSentence'),
    keySentence: document.getElementById('keySentence'),
    translation: document.getElementById('translation'),
    explanation: document.getElementById('explanation'),
    distractorItems: document.getElementById('distractorItems')
};

// 初始化应用
function initApp() {
    loadQuestion('201129');
    bindEvents();
}

// 加载题目数据
function loadQuestion(questionNumber) {
    const data = questionData[questionNumber];
    if (!data) return;
    
    appState.currentQuestion = data;
    renderQuestion(data);
}

// 渲染题目
function renderQuestion(data) {
    // 渲染原文
    renderArticle(data.fullText);
    
    // 渲染问题
    elements.questionText.textContent = data.question;
    
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
    // 将文本分段
    const paragraphs = text.split('\n').filter(p => p.trim());
    
    elements.articleContent.innerHTML = paragraphs.map(paragraph => {
        return `<p>${makeTextClickable(paragraph)}</p>`;
    }).join('');
}

// 使文本可点击
function makeTextClickable(text) {
    // 简单的单词分割和点击处理
    return text.split(' ').map(word => {
        const cleanWord = word.replace(/[.,!?;:]/g, '');
        if (cleanWord.length > 3) {
            return `<span class="highlight" onclick="highlightWord(this)">${word}</span>`;
        }
        return word;
    }).join(' ');
}

// 高亮单词
function highlightWord(element) {
    element.classList.toggle('selected');
}

// 渲染选项
function renderOptions(options) {
    elements.optionsContainer.innerHTML = options.map((option, index) => {
        const letter = String.fromCharCode(65 + index); // A, B, C, D
        return `
            <div class="option-item" onclick="selectOption(this, '${option}')">
                <div class="option-letter">${letter}</div>
                <div class="option-text">${option}</div>
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
    
    // 显示结果
    showAnswerResult(isCorrect);
    
    // 标记选项
    markOptions();
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
    elements.locateWord.textContent = data.locateWord;
    elements.locateSentence.textContent = data.locateSentence;
    elements.keySentence.textContent = data.keySentence;
    elements.translation.textContent = data.translation;
    elements.explanation.textContent = data.explanation;
    
    // 渲染干扰项分析
    renderDistractorAnalysis(data.distractorAnalysis);
    
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
        
        container.innerHTML = `
            ${before}<span class="${className}">${sentence}</span>${after}
        `;
    }
}

// 显示相似题
function showSimilarQuestion() {
    const similarData = similarQuestionData['201026'];
    appState.similarQuestion = similarData;
    
    // 填充相似题数据
    elements.similarArticleContent.textContent = similarData.paragraph;
    elements.similarQuestionText.textContent = similarData.question;
    
    // 渲染相似题选项
    renderSimilarOptions(similarData.candidateAnswers);
    
    // 显示模态框
    elements.similarModal.style.display = 'block';
    
    // 重置相似题状态
    appState.similarAnswered = false;
    elements.similarResult.style.display = 'none';
}

// 渲染相似题选项
function renderSimilarOptions(options) {
    elements.similarOptions.innerHTML = options.map((option, index) => {
        const letter = String.fromCharCode(65 + index);
        return `
            <div class="similar-option" onclick="selectSimilarOption(this, '${option}')">
                <div class="option-letter">${letter}</div>
                <div class="option-text">${option}</div>
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
    
    // 关闭模态框
    elements.closeModalBtn.addEventListener('click', closeModal);
    elements.returnBtn.addEventListener('click', returnToOriginal);
    
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

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initApp); 