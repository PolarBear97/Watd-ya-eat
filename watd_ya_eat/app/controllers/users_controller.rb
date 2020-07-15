class UsersController < ApplicationController
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
      render json: @user, status: :created
    else 
      render @user.errors, status: :unprocessable_entity
    end
  end
  
  private
  
  def user_params
    params.require(:user)
  end
end