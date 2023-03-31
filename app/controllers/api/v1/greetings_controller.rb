class Api::V1::GreetingsController < ApplicationController
  def index
    greeting = Greeting.pluck(:salutations).sample
    render json: greeting, status: :ok
  end
end
