class Api::V1::AuthorsController < ApplicationController
  def show
    author = Author.find(params[:id])
    render json: author
  end
end
