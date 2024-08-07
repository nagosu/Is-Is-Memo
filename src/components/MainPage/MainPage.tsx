function MainPage() {
  return (
    <section className="sm:py7 mt-10 h-screen w-full py-5 sm:mt-12">
      <div className="mx-auto my-0 flex h-full w-11/12 flex-col items-start">
        <input
          type="text"
          placeholder="메모 제목"
          className="font-Pretendard h-9 w-full rounded-md border border-solid border-gray-400 bg-white px-3 text-lg font-semibold text-gray-900 focus:border-blue-500 focus:shadow-lg focus:outline-none sm:h-10 sm:text-xl"
        />
        <textarea
          placeholder="메모 내용을 입력하세요."
          className="font-Pretendard h-textarea mt-4 w-full resize-none rounded-md border border-solid border-gray-400 bg-white px-3 py-2 text-base font-medium text-gray-900 focus:border-blue-500 focus:shadow-lg focus:outline-none sm:text-lg"
        />
      </div>
    </section>
  );
}

export default MainPage;
