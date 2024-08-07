function HeaderMain() {
  return (
    <nav className="fixed left-0 top-0 flex h-10 w-full items-center justify-between bg-teal-600 px-4 sm:h-12 sm:px-5">
      <a
        href="/"
        className="font-Pretendard text-lg font-bold text-white sm:text-xl"
      >
        This Is <span className="text-green-400">Memo</span>
      </a>
      <button
        type="button"
        className="font-Pretendard text-base font-medium text-white sm:text-lg"
      >
        로그인
      </button>
    </nav>
  );
}

export default HeaderMain;
