class SearchController < ApplicationController
  def showSongs

  end

  def findSongs
    @tunes = Tune.all
  end
end
