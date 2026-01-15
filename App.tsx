
import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { IMPORT_EXPORT_STEPS } from './constants';
import { Step, StepTip, QuizQuestion, DocumentReference } from './types';

const IconWrapper = ({ name, className }: { name: string, className?: string }) => {
  const IconComponent = (LucideIcons as any)[name];
  return IconComponent ? <IconComponent className={className} /> : <LucideIcons.HelpCircle className={className} />;
};
// --- AUTH SHIELD COMPONENT ---
const AuthShield = ({ onUnlock }: { onUnlock: () => void }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  const MASTER_PASSWORD = '111111'; // Thay đổi mật khẩu tại đây

  useEffect(() => {
    setIsAnimate(true);
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === MASTER_PASSWORD) {
      localStorage.setItem('xnk_auth', 'true');
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-slate-950 flex items-center justify-center p-6 font-inter">
      <div className={`max-w-md w-full transition-all duration-1000 transform ${isAnimate ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        <div className="bg-slate-900 border-4 border-slate-800 rounded-[3rem] p-10 shadow-[0_0_100px_rgba(37,99,235,0.2)] text-center">
          <div className="w-24 h-24 bg-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/50">
            <LucideIcons.Lock className="text-white w-12 h-12" />
          </div>

          <h1 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Trí Đỗ - XNK</h1>
          <p className="text-blue-400 font-black text-sm uppercase tracking-[0.3em] mb-12">XNK - Sales</p>

          <form onSubmit={handleUnlock} className="space-y-6">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mã truy cập..."
                className={`w-full bg-slate-800 border-4 ${error ? 'border-rose-500 animate-shake' : 'border-slate-700'} rounded-2xl py-5 px-8 text-white font-bold placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-all text-center tracking-[0.5em]`}
                autoFocus
              />
              {error && <p className="text-rose-500 text-sm font-black mt-2 uppercase tracking-widest animate-pulse">Sai mật khẩu!</p>}
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black  hover:scale-[1.03] active:scale-95 transition-all shadow-xl uppercase tracking-widest flex items-center justify-center gap-4"
            >
              VÀO HỆ THỐNG <LucideIcons.ArrowRight className="w-6 h-6" />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest leading-relaxed">
              Tài liệu bảo mật nội bộ <br /> Bản quyền © Trí Đỗ - XNK
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }
      `}</style>
    </div>
  );
};

// Modal Component for Document Preview
const DocumentModal = ({ doc, isOpen, onClose }: { doc: DocumentReference | null, isOpen: boolean, onClose: () => void }) => {
  if (!isOpen || !doc) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 max-h-[90vh]">
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LucideIcons.FileText className="text-blue-400 w-6 h-6" />
            <h3 className="text-lg font-bold">Demo Chứng từ: {doc.name}</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <LucideIcons.X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-auto bg-slate-200 flex items-center justify-center p-4">
          <img
            src={doc.imageUrl}
            alt={doc.name}
            className="max-w-full h-auto rounded shadow-lg m-auto"
          />
        </div>

        <div className="p-6 bg-white border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm text-slate-500 italic">Đây là bản mẫu tham khảo cho nghiệp vụ demo.</p>
          <button onClick={onClose} className="px-6 py-2 bg-slate-900 text-white rounded-xl font-bold text-sm">Đóng bản xem</button>
        </div>
      </div>
    </div>
  );
};

// Modal Component for Quiz
const QuizModal = ({ questions, isOpen, onClose, stepTitle, stepColor }: { questions: QuizQuestion[], isOpen: boolean, onClose: () => void, stepTitle: string, stepColor: string }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (!isOpen) return null;

  const currentQuestion = questions[currentIdx];

  const handleSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedAnswer(idx);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setIsSubmitted(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" onClick={onClose} />

      <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 min-h-[500px]">
        {/* Header */}
        <div className={`p-6 flex items-center justify-between text-white ${stepColor}`}>
          <div className="flex items-center gap-3">
            <LucideIcons.GraduationCap className="w-6 h-6" />
            <h3 className="font-black uppercase tracking-tight text-sm">Kiểm tra kiến thức: {stepTitle}</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-black/10 rounded-full transition-colors">
            <LucideIcons.X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
          {!showResult ? (
            <div className="space-y-8">
              {/* Question Progress */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-slate-400">Câu {currentIdx + 1}/{questions.length}</span>
              </div>

              <h4 className="text-2xl font-black text-slate-800 leading-tight">
                {currentQuestion.question}
              </h4>

              <div className="space-y-4">
                {currentQuestion.options.map((opt, idx) => {
                  let buttonClass = "w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center gap-4 ";

                  if (isSubmitted) {
                    if (idx === currentQuestion.correctAnswer) {
                      buttonClass += "bg-emerald-50 border-emerald-500 text-emerald-700 shadow-md shadow-emerald-100 ";
                    } else if (idx === selectedAnswer) {
                      buttonClass += "bg-rose-50 border-rose-500 text-rose-700 ";
                    } else {
                      buttonClass += "bg-slate-50 border-transparent opacity-50 ";
                    }
                  } else {
                    buttonClass += selectedAnswer === idx
                      ? "bg-blue-50 border-blue-500 text-blue-700 shadow-lg "
                      : "bg-white border-slate-100 hover:border-slate-300 text-slate-700 ";
                  }

                  return (
                    <button key={idx} onClick={() => handleSelect(idx)} className={buttonClass}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${isSubmitted && idx === currentQuestion.correctAnswer ? "bg-emerald-500 text-white" :
                        isSubmitted && idx === selectedAnswer ? "bg-rose-500 text-white" :
                          selectedAnswer === idx ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-500"
                        }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className="font-medium">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {isSubmitted && (
                <div className="p-6 bg-blue-50 rounded-[1.5rem] border border-blue-100 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex gap-4">
                    <LucideIcons.AlertCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-800 leading-relaxed">
                      <span className="font-bold">Giải thích: </span>
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center">
                  <LucideIcons.Trophy className={`w-16 h-16 ${score >= 3 ? 'text-amber-500' : 'text-slate-400'}`} />
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-black border-4 border-white">
                  {score}/5
                </div>
              </div>

              <div>
                <h4 className="text-3xl font-black text-slate-800 mb-2">
                  {score === 5 ? "Tuyệt vời!" : score >= 3 ? "Làm tốt lắm!" : "Cần cố gắng thêm!"}
                </h4>
                <p className="text-slate-500 font-medium">Bạn đã hoàn thành bài kiểm tra về giai đoạn <br /><b>{stepTitle}</b></p>
              </div>

              <div className="w-full bg-slate-50 p-6 rounded-2xl text-left">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Phân tích kết quả</p>
                <div className="flex justify-between items-center text-sm font-bold text-slate-700">
                  <span>Đúng: {score} câu</span>
                  <span>Sai: {5 - score} câu</span>
                </div>
                <div className="mt-3 h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500" style={{ width: `${(score / 5) * 100}%` }} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-8 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
          {!showResult ? (
            <>
              {!isSubmitted ? (
                <button
                  disabled={selectedAnswer === null}
                  onClick={handleSubmit}
                  className="ml-auto px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:scale-105 transition-all disabled:opacity-30"
                >
                  KIỂM TRA ĐÁP ÁN
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className={`ml-auto px-10 py-4 rounded-2xl text-white font-black text-sm hover:scale-105 transition-all shadow-xl ${stepColor}`}
                >
                  {currentIdx < questions.length - 1 ? "CÂU TIẾP THEO" : "XEM KẾT QUẢ"}
                </button>
              )}
            </>
          ) : (
            <div className="w-full flex gap-4">
              <button onClick={resetQuiz} className="flex-1 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-black text-sm hover:bg-slate-50 transition-all">
                THỬ LẠI
              </button>
              <button onClick={onClose} className={`flex-1 py-4 text-white rounded-2xl font-black text-sm hover:scale-105 transition-all shadow-xl ${stepColor}`}>
                KẾT THÚC
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Modal Component for Detailed Tips
const DetailModal = ({ tip, isOpen, onClose, stepColor }: { tip: StepTip | null, isOpen: boolean, onClose: () => void, stepColor: string }) => {
  if (!isOpen || !tip) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
        {/* Header decoration */}
        <div className={`h-24 w-full flex items-center px-10 text-white ${stepColor}`}>
          <LucideIcons.Info className="w-8 h-8 mr-4 opacity-50" />
          <h3 className="text-xl font-black uppercase tracking-tight">Chi tiết Nghiệp vụ</h3>
          <button
            onClick={onClose}
            className="ml-auto w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors"
          >
            <LucideIcons.X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-10 overflow-y-auto max-h-[70vh]">
          <h4 className="text-2xl font-black text-slate-800 mb-6 leading-tight">
            {tip.title}
          </h4>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
              {tip.detail}
            </p>
          </div>

          <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-1">
              <LucideIcons.CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 mb-1 uppercase tracking-widest">Lời khuyên từ chuyên gia</p>
              <p className="text-sm text-slate-500 italic">
                "Việc nắm vững kiến thức này không chỉ giúp bạn giảm thiểu rủi ro cho lô hàng mà còn xây dựng vị thế chuyên gia trong mắt khách hàng, giúp việc chốt hợp đồng trở nên dễ dàng hơn."
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className={`px-8 py-3 rounded-xl text-white font-bold text-sm shadow-lg transition-all hover:scale-105 ${stepColor}`}
          >
            Đã hiểu
          </button>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<Step>(IMPORT_EXPORT_STEPS[0]);
  const [activeTip, setActiveTip] = useState<StepTip | null>(null);
  const [activeDoc, setActiveDoc] = useState<DocumentReference | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);

  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('xnk_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Progress percentage calculation
  const progress = Math.round(((selectedStep.id) / (IMPORT_EXPORT_STEPS.length - 1)) * 100);

  const handleOpenDetail = (tip: StepTip) => {
    setActiveTip(tip);
    setIsDetailModalOpen(true);
  };

  const handleOpenQuiz = () => {
    setIsQuizModalOpen(true);
  };

  const handleOpenDoc = (doc: DocumentReference) => {
    setActiveDoc(doc);
    setIsDocModalOpen(true);
  };

  if (!isAuthenticated) {
    return <AuthShield onUnlock={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50 overflow-hidden h-screen">
      {/* Navigation Sidebar */}
      <aside className="w-full lg:w-80 bg-white border-r border-slate-200 flex flex-col shadow-xl z-10 overflow-hidden">
        <div className="p-6 bg-slate-900 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
              <LucideIcons.Ship className="text-white w-5 h-5" />
            </div>
            <h1 className="text-lg font-bold uppercase tracking-widest text-blue-400">Đỗ Hữu Trí - XNK</h1>
          </div>
          <p className="text-slate-400 text-[10px] font-medium uppercase tracking-widest opacity-80">Training Hub v1.0</p>

          <div className="mt-6">
            <div className="flex justify-between text-[10px] mb-1 font-bold uppercase text-slate-400">
              <span>Tiến trình</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
          {IMPORT_EXPORT_STEPS.map((step) => (
            <button
              key={step.id}
              onClick={() => setSelectedStep(step)}
              className={`w-full text-left p-3 rounded-xl transition-all duration-200 border-2 flex items-center gap-3 relative overflow-hidden group ${selectedStep.id === step.id
                ? 'bg-blue-50 border-blue-500 shadow-sm'
                : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'
                }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0 ${step.color} shadow-sm transition-transform group-hover:scale-105`}>
                <IconWrapper name={step.iconName} className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-[10px] font-bold uppercase ${selectedStep.id === step.id ? 'text-blue-600' : 'text-slate-400'}`}>
                  {step.id === 0 ? 'Tổng quan' : `Giai đoạn ${step.id}`}
                </p>
                <h3 className={`font-bold text-sm truncate ${selectedStep.id === step.id ? 'text-slate-900' : 'text-slate-600'}`}>
                  {step.title}
                </h3>
              </div>
            </button>
          ))}
        </nav>

        {/* <div className="p-4 border-t border-slate-100 bg-slate-50">
          <div className="text-center p-4">
            <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">Tài liệu học tập</p>
            <div className="flex gap-2">
              <button className="flex-1 p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
                <LucideIcons.BookOpen className="w-4 h-4 mx-auto" />
              </button>
              <button className="flex-1 p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
                <LucideIcons.FileSearch className="w-4 h-4 mx-auto" />
              </button>
            </div>
          </div>
        </div> */}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col bg-slate-50 relative overflow-y-auto overflow-x-hidden scroll-smooth">
        {/* Sticky Sub-Header */}
        <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${selectedStep.color}`}>
              <IconWrapper name={selectedStep.iconName} className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-black text-slate-800 tracking-tight">{selectedStep.title}</h2>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{selectedStep.subtitle}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              disabled={selectedStep.id === 0}
              onClick={() => setSelectedStep(IMPORT_EXPORT_STEPS[selectedStep.id - 1])}
              className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-20 transition-all"
            >
              <LucideIcons.ChevronLeft className="w-6 h-6" />
            </button>
            <button
              disabled={selectedStep.id === IMPORT_EXPORT_STEPS.length - 1}
              onClick={() => setSelectedStep(IMPORT_EXPORT_STEPS[selectedStep.id + 1])}
              className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-20 transition-all"
            >
              <LucideIcons.ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto w-full p-6 lg:p-12 space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
          {/* Main Hero Card */}
          <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-sm border border-slate-200 relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-80 h-80 opacity-5 translate-x-20 -translate-y-20 rounded-full transition-transform duration-1000 group-hover:scale-110 ${selectedStep.color}`} />

            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-slate-100 rounded-full text-slate-600">
                <div className={`w-2 h-2 rounded-full animate-pulse ${selectedStep.color}`} />
                <span className="text-xs font-black uppercase tracking-[0.2em]">{selectedStep.subtitle}</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
                {selectedStep.title}
              </h1>

              <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                {selectedStep.details}
              </p>
            </div>
          </div>

          {/* Overview Image Section */}
          {selectedStep.isOverview && selectedStep.image && (
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[16px] border-white ring-1 ring-slate-200 group">
              <img
                src={selectedStep.image}
                alt="Overview"
                className="w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-12">
                <div className="max-w-2xl">
                  <h3 className="text-white text-3xl font-black mb-4">Mô hình vận hành</h3>
                  <p className="text-slate-200 text-lg font-medium leading-relaxed">
                    Hệ thống tích hợp từ kho bãi, vận tải đa phương thức đến thủ tục hải quan số, giúp tối ưu hóa 30% thời gian giao hàng.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Customs Special UI */}
          {selectedStep.isCustomsStep && selectedStep.channels && (
            <section className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-black text-slate-800 flex items-center gap-4">
                  <LucideIcons.ShieldCheck className="text-emerald-500 w-10 h-10" />
                  Phân luồng Tờ khai
                </h3>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Hệ thống VNACCS/VCIS</span>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {selectedStep.channels.map((ch, idx) => (
                  <div key={idx} className={`p-10 rounded-[2.5rem] border-2 shadow-sm bg-white flex flex-col h-full transition-all hover:shadow-2xl hover:-translate-y-2 group ${ch.color}`}>
                    <div className="text-3xl font-black mb-6 flex items-center justify-between">
                      {ch.code}
                      <LucideIcons.ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="font-black text-slate-900 text-xl mb-4">{ch.name}</div>
                    <p className="text-base leading-relaxed opacity-80 flex-1 font-medium">{ch.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-12 pb-20">
            {/* Tips/Points */}
            <div className="lg:col-span-8 space-y-10">
              <div className="bg-white p-10 lg:p-14 rounded-[3rem] shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-12">
                  <h3 className="text-2xl font-black text-slate-900 flex items-center gap-4">
                    <LucideIcons.Zap className="text-amber-500 w-8 h-8" />
                    Nội dung đào tạo trọng tâm
                  </h3>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full">Bấm để xem chi tiết</span>
                </div>

                <div className="space-y-8">
                  {selectedStep.tips.map((tip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOpenDetail(tip)}
                      className="w-full text-left flex gap-8 p-8 rounded-[2rem] bg-slate-50 hover:bg-white border-2 border-transparent hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-100 transition-all group relative overflow-hidden"
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 transition-transform group-hover:rotate-12 ${selectedStep.color} text-white shadow-xl`}>
                        {idx + 1}
                      </div>
                      <div className="flex-1 pr-10">
                        <h4 className="text-xl font-black text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                          {tip.title}
                        </h4>
                        <p className="text-slate-500 text-base leading-relaxed line-clamp-2">
                          {tip.detail}
                        </p>
                      </div>
                      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                        <LucideIcons.ArrowRight className="w-6 h-6 text-blue-500" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar with Documents */}
            <div className="lg:col-span-4 space-y-10">
              <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <LucideIcons.Files className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 rotate-12" />
                <h3 className="text-xl font-black mb-10 uppercase tracking-widest flex items-center gap-3">
                  <LucideIcons.FileText className="text-blue-400 w-6 h-6" />
                  Demo Chứng từ
                </h3>
                <div className="space-y-4 relative z-10">
                  {selectedStep.docs.map((doc, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOpenDoc(doc)}
                      className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                        <LucideIcons.Image className="w-5 h-5" />
                      </div>
                      <span className="text-slate-200 font-bold text-sm group-hover:text-white transition-colors flex-1">
                        {doc.name}
                      </span>
                      <LucideIcons.Eye className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>

                <div className="mt-10 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2 text-center">Tài liệu Demo</p>
                  <p className="text-xs text-slate-400 text-center italic">Nhấp vào từng tệp để hiển thị hình ảnh minh họa thực tế cho buổi đào tạo.</p>
                </div>
              </div>

              {/* Quiz CTA */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                <h4 className="text-2xl font-black mb-4 relative z-10 text-white">Bài Test Nhanh</h4>
                <p className="text-indigo-100 mb-8 leading-relaxed font-medium relative z-10">
                  Thử sức với 5 câu hỏi tình huống thực tế cho giai đoạn <b>{selectedStep.title}</b>.
                </p>
                <button onClick={handleOpenQuiz} className="w-full py-4 bg-white text-indigo-700 rounded-2xl font-black text-sm hover:scale-105 transition-all shadow-xl relative z-10">
                  BẮT ĐẦU NGAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal Integrations */}
      <DetailModal
        tip={activeTip}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        stepColor={selectedStep.color}
      />

      <QuizModal
        questions={selectedStep.quiz}
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
        stepTitle={selectedStep.title}
        stepColor={selectedStep.color}
      />

      <DocumentModal
        doc={activeDoc}
        isOpen={isDocModalOpen}
        onClose={() => setIsDocModalOpen(false)}
      />
    </div>
  );
};

export default App;
