class PostsController < ApplicationController

  def index
    render json: Post.all, except: :comments
  end

  def show
    render json: Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    @post.update(params.require(:post).permit(:title, :body))
    render json: @post.save
  end

end
