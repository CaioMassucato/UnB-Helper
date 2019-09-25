class PostsController < ApplicationController
    before_action :set_post, only: [:show, :update, :destroy]

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post ,status: :created
    else
      render json: @post.erros, status: :unprocessable_entity
    end
  end

  def show
    render json: @post, status: 200
  end

  def search
    @q = Post.ransack(name_or_content_cont: params[:q])
    @post = @q.result
    render json: @post
  end

  def index
    @post = Post.all
    render json: @post
  end

  def update
    if @post.update_attributes(post_params)
      render json: @post
    else
      render json: @post.erros ,status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
    render json: {status: 'SUCCESS', message:'Deleted post', data:@post},status: :ok
  end

  private
    def set_post
      @post = Post.find(params[:id])
    end


    def post_params
        params.require(:post).permit(:name,:content,:likes)
    end
end
