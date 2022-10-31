<template>
  <div class="about">
    <ul @click="handlerClick">
      <li v-for="item in ulList" :key="item.id" :data-li="item.id">
        <p>
          test
          <span>{{ item.title }}</span>
          <span> ----- </span>
          <span>{{ item.date }}</span>
        </p>
      </li>
    </ul>
    <div>
      <input
        type="file"
        ref="clearFile"
        @change="getFile($event)"
        multiple="multiplt"
        accept=".docx,.doc,.pdf"
      />
      <hr />
      <div ref="outHtml"></div>
    </div>
  </div>
</template>

<script>
// https://www.npmjs.com/package/mammoth
const mammoth = require('mammoth');
var markdown = require('markdown').markdown;
// import { post } from "../api/request";
// let url = "/books/";

export default {
  data() {
    return {
      ulList: [
        {
          id: 10001,
          age: 18,
          title: "0",
          date: new Date().toLocaleString(),
        },
        {
          id: 11111,
          age: 18,
          title: "1",
          date: new Date().toLocaleString(),
        },
        {
          id: 111112,
          age: 18,
          title: "2",
          date: new Date().toLocaleString(),
        },
        {
          id: 11113,
          age: 18,
          title: "3",
          date: new Date().toLocaleString(),
        },
      ],
    };
  },
  props: {
    msg: String,
  },
  created() {
    // post(url).then((res) => {
    //     console.log(res?.data?.subjects);
    // });
  },
  methods: {
    handlerClick: function (e) {
      console.log(e.target, e.currentTarget);
    },
    getFile: function (e) {
      console.log(e.target.files);
      let files = e.target.files;
      let file = files[0];
      let reader = new FileReader();
      console.time("文件");
      reader.onloadend = () => {
        var arrayBuffer = reader.result;
        // debugger
        mammoth
          .convertToHtml({ arrayBuffer: arrayBuffer })
          .then((resultObject) => {
            // result1.innerHTML = resultObject.value
            console.log(resultObject.value);
            this.$refs.outHtml.innerHTML = resultObject.value;
          });
        console.timeEnd("文件");
        mammoth.extractRawText({ arrayBuffer: arrayBuffer }).then(() => {
          // result2.innerHTML = resultObject.value
          // console.log(resultObject.value);
          // this.$refs.outHtml.innerHTML = resultObject.value;
        });

        mammoth
          .convertToMarkdown({ arrayBuffer: arrayBuffer })
          .then((resultObject) => {
            // result3.innerHTML = resultObject.value
            console.log(resultObject.value);
            // this.$refs.outHtml.innerHTML = markdown.toHTML(resultObject.value);
          });
      };
      reader.readAsArrayBuffer(file);
    },
  },
};
</script>
