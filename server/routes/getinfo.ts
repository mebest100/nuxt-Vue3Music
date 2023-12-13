import axios from "axios";

export default defineEventHandler(() => {
  const url = "https://api.xygeng.cn/one";
  return axios
    .get(url, {
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    //   },
    })
    .then(
      ({
        data: {
          data: { content },
        },
      }) => {
        return content;
      }
    );
});
