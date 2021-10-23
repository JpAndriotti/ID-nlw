const linksSocialMedia = {
  github: 'jpandriotti',
  youtube: 'channel/UCfguSXQ5mXNUsSxay3EbGzw',
  facebook: 'jp.andriotti',
  instagram: 'jupa_andriotti',
  twitter: 'MagnificosPatos'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

// just showing whoever comes that I have this knowledge.

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userImage.src = data.avatar_url
    })
}

getGithubProfileInfos()
