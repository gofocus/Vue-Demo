<template>
    <div class="comment-container">
        <h4>发表评论</h4>
        <hr>
        <label>
            <textarea id="post-comment" cols="111111" placeholder="输入要BB的内容" v-model="comment.content"></textarea>
        </label>
        <div class="mui-btn mui-btn-primary" @click="postComment">发表评论</div>
        <div class="comments-list">
            <div v-for="(item,index) in commentsList" :id="item.add_time" class="comment-item">
                <div class="comment-title">
                    <span>第{{ ++index }}楼&nbsp;</span>
                    <span>{{ item.user_name }} &nbsp;</span>
                    <span>发表时间：{{ item.add_time | dateFormatter }}&nbsp;</span>
                </div>
                <div class="comment-content">
                    <p>{{ item.content }}</p>
                </div>
            </div>
        </div>
        <div class="mui-btn mui-btn-danger" @click="getCommentsList">加载更多</div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "comment",
        data() {
            return {
                commentsList: [],
                page: 1,
                comment: {'content': ''}
            }
        },
        props: ['artid'],
        methods: {
            getCommentsList() {
                this.axios.get(this.api + '/getcomments/' + this.artid + '?pageindex=' + this.page)
                    .then(res => {
                        if (res.data.status === 0) {
                            if (res.data.message.length === 0) {
                                Toast('没有更多评论了');
                            } else {
                                this.commentsList = this.commentsList.concat(res.data.message);
                                this.page++;
                            }

                        } else {
                            Toast('读取newsInfo失败');
                        }
                    })
            },
            postComment() {
                if (this.comment.content.trim().length !== 0) {
                    this.axios.post(this.api + '/postcomment/' + this.artid, this.comment).then(res => {
                            if (res.data.status === 0) {
                                const newComment = {user_name: "匿名用户", add_time: new Date(), content: this.comment.content};
                                this.commentsList.unshift(newComment);
                                this.comment.content = '';
                            }
                            else {
                                Toast('发表评论失败');
                            }
                        }
                    );
                }
                else {
                    Toast('评论内容不能为空');
                }
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

        textarea {
            font-size: 14px;
            margin: 0;
            height: 100px;
        }

        .mui-btn.mui-btn-primary, .mui-btn-danger {
            width: 100%;
        }

        .comments-list {
            padding: 6px 2px;

            .comment-item {
                margin: 5px 0;

                .comment-title {
                    line-height: 35px;
                    background-color: lightgrey;
                    font-size: 12px;
                }

                .comment-content {
                    p {
                        color: black;
                        text-indent: 2em;

                    }
                }
            }

        }
    }
</style>
