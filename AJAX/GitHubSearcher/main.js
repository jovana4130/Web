"use strict";

$("#search-input").on("keypress", function(e) {
    if (e.which === 13) {
      searchUsers();
    }
  });
  function searchUsers() {
    var query = $("#search-input").val();
    $.ajax({
      url: "https://api.github.com/search/users?q=" + query,
      success: function(data) {
        $("#user-list").empty();
        data.items.forEach(function(item) {
          var userContainer = $("<div class='user-container'></div>");
          var userAvatar = $("<div class='user-avatar'></div>");
          userAvatar.css("background-image", "url(" + item.avatar_url + ")");
          userContainer.append(userAvatar);
          userContainer.append("<div>" + item.login + "</div>");
          userContainer.data("repos_url", item.repos_url);
          userContainer.click(function() {
            $("#user-list").hide();
            $("#repo-list").show();
            searchRepos($(this).data("repos_url"));
          });
          $("#user-list").append(userContainer);
        });
      }
    });
  }
  
  function searchRepos(reposUrl) {
    $.ajax({
      url: reposUrl,
      success: function(data) {
        $("#user-list").empty();
        var repoContainer = $("<div class='repo-container'></div>");
        data.forEach(function(repo) {
          var repoItem = $("<div class='repo-item'></div>");
          var repoAvatar = $("<div class='repo-avatar'></div>");
          repoAvatar.css("background-image", repo.owner.avatar_url ? "url(" + repo.owner.avatar_url + ")" : "none");
          repoItem.append(repoAvatar);
          repoItem.append("<div>" + repo.name + "</div>");
          repoItem.append("<div>" + repo.description + "</div>");
          repoItem.append("<div>Stars: " + repo.stargazers_count + "</div>");
          repoItem.append("<div>Languages: " + repo.language + "</div>");
          repoContainer.append(repoItem);
        });
        $("#user-list").append(repoContainer);
      }
    });
  }