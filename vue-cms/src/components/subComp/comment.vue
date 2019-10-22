<template>
    <div class="comment-container">
        <h4>发表评论</h4>
        <hr>
        <label>
            <textarea id="post-comment" cols="111111" placeholder="输入要BB的内容"></textarea>
        </label>
        <div class="mui-btn mui-btn-primary">发表评论</div>
        <ul class="comments-list">
            <li v-for="item in commentsList" :id="item.add_time">
                <div class="comment-info">
                    <span>1楼 </span>
                    <span>用户：{{ item.user_name }} </span>
                    <span>发表时间：{{ item.add_time | dateFormatter }}</span>
                </div>
                <div class="comment-content">
                    <p>{{ item.content }}</p>
                </div>
            </li>
        </ul>
        <div class="mui-btn mui-btn-danger">加载更多</div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "comment",
        data() {
            return {
                artid: 1,
                commentsList: [],

            }
        },
        methods: {
            getCommentsList(){
                this.axios.get(this.api + '/getcomments/' + this.artid + '?pageindex=1')
                    .then(res=>{
                        if (res.data.status === 0) {
                            this.commentsList = res.data.message;
                        }else {
                            Toast('读取newsInfo失败');
                        }
                    })
            }
        },
        created() {
            this.getCommentsList();
        },
    };
</script>

<style scoped lang="scss">
    .comment-container {
        padding: 0 4px;

        .mui-btn.mui-btn-primary, .mui-btn-danger {
            width: 100%;
        }

        .comments-list {
            padding: 6px 2px;


            .comment-info {
                background-color: lightgrey;
                font-size: 12px;
            }

            .comment-content {
                p {
                    color: black;
                }
            }
        }
    }
</style>
