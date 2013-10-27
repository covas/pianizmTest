class CancionController < ApplicationController
  def showSong
    @name = params[:name]
    @tune = Tune.find_by_name @name.to_s
  end
end
