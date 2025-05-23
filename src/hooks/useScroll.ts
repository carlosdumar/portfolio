const useScroll = () => {
  const scrollToSection = (sectionName: string | undefined) => {
    const element = document.getElementById(sectionName ?? "");

    window.scrollTo({
      top: element?.offsetTop,
      behavior: "smooth",
    });
  };

  return { scrollToSection };
};

export default useScroll;
