import { useState, useEffect, useRef } from 'react';

const ROLES = [
  'Cloud Architect',
  'DevSecOps Engineer',
  'AI Solutions Builder',
  'Data Engineer',
  'Multi-Cloud Specialist'
];

export default function Terminal() {
  const [typedRole, setTypedRole] = useState('Cloud Architect');
  const [history, setHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [cmdHistoryList, setCmdHistoryList] = useState([]);
  
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    let roleIdx = 0;
    let charIdx = ROLES[0].length;
    let isDeleting = true;
    let timer;

    const tick = () => {
      const current = ROLES[roleIdx];

      if (!isDeleting) {
        charIdx++;
        setTypedRole(current.slice(0, charIdx));
        if (charIdx === current.length) {
          isDeleting = true;
          timer = setTimeout(tick, 2200);
          return;
        }
      } else {
        charIdx--;
        setTypedRole(current.slice(0, charIdx));
        if (charIdx === 0) {
          isDeleting = false;
          roleIdx = (roleIdx + 1) % ROLES.length;
          timer = setTimeout(tick, 450);
          return;
        }
      }

      timer = setTimeout(tick, isDeleting ? 35 : 65);
    };

    // Initial 2.5s delay so the reader reads "Cloud Architect" cleanly first
    timer = setTimeout(tick, 2500);

    return () => clearTimeout(timer);
  }, []);

  const runCommand = (cmdText) => {
    const raw = cmdText.trim();
    if (!raw) return;

    setCmdHistoryList((prev) => [...prev, raw]);
    setCmdIndex(-1);

    const cmd = raw.toLowerCase();
    let response = '';

    switch (cmd) {
      case 'help':
        response = `Available commands:
  • whoami    - Profile summary & experience
  • skills    - Cloud platforms & competencies
  • stack     - Daily core toolset & orchestration
  • contact   - WhatsApp, LinkedIn & GitHub direct links
  • clear     - Clear terminal buffer`;
        break;
      case 'whoami':
        response = `Jorge Alberto Gallaga Arevalo
Role: Cloud & AI Solutions Architect
Experience: 15 years designing secure, highly-available multi-cloud platforms.`;
        break;
      case 'skills':
        response = `• AWS: EKS, Bedrock, VPC, RDS, IAM, CloudWatch
• Azure: AKS, Azure AI Foundry, VNet, Cosmos DB
• Google Cloud: GKE, Vertex AI, Cloud Armor, BigQuery
• DevSecOps: Terraform, Helm, OPA, CI/CD, Container Hardening`;
        break;
      case 'stack':
        response = `Terraform · Helm · Kubernetes · Databricks · Apache Spark · Python · Docker · OPA · SonarQube · GitHub Actions`;
        break;
      case 'contact':
        response = `WhatsApp: https://wa.me/525514925837
LinkedIn: https://www.linkedin.com/in/albertoarevalo
GitHub:   https://github.com/GeorgeGxx`;
        break;
      case 'clear':
        setHistory([]);
        setInputValue('');
        return;
      default:
        response = `zsh: command not found: ${raw}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { cmd: raw, response }]);
    setInputValue('');

    setTimeout(() => {
      if (bodyRef.current) {
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
      }
    }, 50);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runCommand(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistoryList.length === 0) return;
      const nextIdx = cmdIndex === -1 ? cmdHistoryList.length - 1 : Math.max(0, cmdIndex - 1);
      setCmdIndex(nextIdx);
      setInputValue(cmdHistoryList[nextIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex === -1) return;
      const nextIdx = cmdIndex + 1;
      if (nextIdx >= cmdHistoryList.length) {
        setCmdIndex(-1);
        setInputValue('');
      } else {
        setCmdIndex(nextIdx);
        setInputValue(cmdHistoryList[nextIdx] || '');
      }
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="cursor-text rounded-2xl bg-[#0c1219]/90 border border-slate-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(34,211,238,0.08)] overflow-hidden transition-all duration-300 hover:border-cyan-500/40"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#090e14] border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="font-mono text-xs text-slate-400">jorge — zsh — 80×24</div>
        <div className="w-12 text-right">
          <span className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest">LIVE</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div ref={bodyRef} className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed max-h-[380px] overflow-y-auto terminal-scroll">
        <p className="text-slate-200 mb-1">
          <span className="text-cyan-400 mr-2">$</span>whoami
        </p>
        <p className="text-slate-400 mb-3 ml-4">jorge_gallaga</p>

        <p className="text-slate-200 mb-1">
          <span className="text-cyan-400 mr-2">$</span>cat role.txt
        </p>
        <p className="text-cyan-300 font-semibold mb-3 ml-4">
          <span>{typedRole}</span>
          <span className="inline-block w-2 h-3.5 bg-cyan-400 ml-1 animate-pulse" />
        </p>

        <p className="text-slate-200 mb-1">
          <span className="text-cyan-400 mr-2">$</span>kubectl get skills -n core
        </p>
        <div className="text-slate-400 mb-3 ml-4 space-y-0.5">
          <div className="text-slate-500 font-bold">NAME          READY  STATUS</div>
          <div className="flex justify-between max-w-[240px]">
            <span>aws</span>
            <span>1/1</span>
            <span className="text-emerald-400 font-medium">Running</span>
          </div>
          <div className="flex justify-between max-w-[240px]">
            <span>azure</span>
            <span>1/1</span>
            <span className="text-emerald-400 font-medium">Running</span>
          </div>
          <div className="flex justify-between max-w-[240px]">
            <span>gcp</span>
            <span>1/1</span>
            <span className="text-emerald-400 font-medium">Running</span>
          </div>
          <div className="flex justify-between max-w-[240px]">
            <span>devsecops</span>
            <span>1/1</span>
            <span className="text-emerald-400 font-medium">Running</span>
          </div>
          <div className="flex justify-between max-w-[240px]">
            <span>ai-data</span>
            <span>1/1</span>
            <span className="text-amber-400 font-medium">Provisioning</span>
          </div>
        </div>

        {/* Dynamic Command History Output */}
        {history.map((item, idx) => (
          <div key={idx} className="my-2.5">
            <p className="text-slate-200">
              <span className="text-cyan-400 mr-2">$</span>
              {item.cmd}
            </p>
            <pre className="text-slate-300 mt-1 ml-4 whitespace-pre-wrap font-mono text-xs leading-normal border-l-2 border-cyan-500/30 pl-2">
              {item.response}
            </pre>
          </div>
        ))}

        {/* Quick Suggestion Chips */}
        <div className="my-3 pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-1.5 text-[11px]">
          <span className="text-slate-500 mr-1 text-[10px] uppercase tracking-wider">Quick:</span>
          {['help', 'skills', 'stack', 'contact', 'clear'].map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                runCommand(chip);
              }}
              className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-cyan-950 text-cyan-400 hover:text-cyan-300 border border-slate-700/60 hover:border-cyan-500/40 transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Interactive Prompt Input */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
          <label htmlFor="term-cli-input" className="text-cyan-400 font-bold">$</label>
          <input
            id="term-cli-input"
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help' or click commands above..."
            className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-600 font-mono text-xs sm:text-[13px] caret-cyan-400"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
}
