import dataSet from "./../dataSet.json";

const Data = () => {
  const data = dataSet.filter((it) => it.BSN_STATE_NM === "영업중");
  //영업중인 것만
  const subject = data.map((it) => {
    it.TREAT_SBJECT_CONT_INFO.split(", ");
    console.log(subject);
  });
};

export default Data;
