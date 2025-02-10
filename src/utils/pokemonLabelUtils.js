export const getTypeColor = (type) => {
  switch (type) {
    case "노말":
      return "#A8A878";
    case "불꽃":
      return "#F08030";
    case "물":
      return "#6890F0";
    case "전기":
      return "#F8D030";
    case "풀":
      return "#78C850";
    case "얼음":
      return "#98D8D8";
    case "격투":
      return "#C03028";
    case "독":
      return "#A040A0";
    case "땅":
      return "#E0C068";
    case "비행":
      return "#A890F0";
    case "에스퍼":
      return "#F85888";
    case "벌레":
      return "#A8B820";
    case "바위":
      return "#B8A038";
    case "고스트":
      return "#705898";
    case "드래곤":
      return "#7038F8";
    case "악":
      return "#705848";
    case "강철":
      return "#B8B8D0";
    case "페어리":
      return "#EE99AC";
    default:
      return "#68A090";
  }
};
