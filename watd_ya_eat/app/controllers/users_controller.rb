class UsersController < ApplicationController
  before_action :set_user, only [:show, :update, :destroy]
  before_action :authorize_request, except: :create
  def index
    @users = User.all 
    render json: @users, include: :meals, status: :ok
  end
  
  def show
    @user = User.find(params[:id])
    render json: @user, include: :meals, status: :ok
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      @token = encode({ user_id: @user.id, username: @user.username})
      render json: {user: @user, token: @token}, status: :created, location: @user
    else 
      render json: @user.errors, status: :unprocessable_entity
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:username, :password)
  end
end