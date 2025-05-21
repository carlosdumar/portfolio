const useScroll = () => {
  const scrollToSection = (elementName: string | undefined) => {
    const element = document.getElementById(elementName ?? "");

    window.scrollTo({
      top: element?.offsetTop,
      behavior: "smooth",
    });
  };

  return { scrollToSection };
};

export default useScroll;
