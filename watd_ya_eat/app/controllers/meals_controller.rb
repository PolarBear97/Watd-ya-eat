class MealsController < ApplicationController
  before_action :authorize_request, except: [:show,:index]
  def index
    @user = User.find(params[:user_id])
    @meals = Meal.where(user_id: @user.id)
    render json: @meals
  end
  
  def show
    @meal = Meal.find(params[:id])
    render json: @meal, status: :ok
  end
  
  def create
    @meal = Meal.new(meal_params)
    
    @meal.user = @current_user
    @slot = Slot.find(params[:slot_id])
    @meal.slot_id = @slot.id
    if @meal.save
      render json: @meal, status: :created
    else
      render json: @meal.errors, status: :unprocessable_entity
    end
  end

  def slotlookup
    @slot = Slot.find(params[:slot_id])
    @meals = Meal.where(slot_id: @slot.id)
    render json: @meals
  end
  
  def add_meal 
    @slot = Slot.find(params[:slot_id])
    @meals = Meal.where(slot_id: @slot.id)
    @user.foods << @food
    render json: @meals
  end

  def update
    @meal = Meal.find(params[:id])
    @meal.update(meal_params)
    render json: @meal
  end
  
  def destroy
    @meal = Meal.find(params[:id])
    @meal.destroy
    render json: @meal
  end
  
  private
  
  def meal_params
    params.require(:meal).permit(:foodeaten)
  end
  
end