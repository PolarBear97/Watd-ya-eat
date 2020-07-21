class SlotsController < ApplicationController
  def index
    @slots = Slot.all
    render json: @slots, include: :meals, status: :ok
  end
  
  def show
    @slot = Slot.find(params[:id])
    render json: @slot, include: :meals, status: :ok
  end
  
end