import angular from 'ionic';

import jsonpatch from 'fast-json-patch-duplex';

import {Chat, Chats, Data} from 'services';
import {User} from 'schemas';

interface ChatDetailParams extends ng.ui.IStateParamsService {
  chatId: string;
}

export class DashCtrl {
}

export class ChatsCtrl {
  chats: Array<Chat>;
  Chats: Chats;

  constructor(Chats: Chats) {
    this.chats = Chats.all();
    this.Chats = Chats;
  }

  remove(chat: Chat) {
    this.Chats.remove(chat);
  }
}

export class ChatDetailCtrl {
  chat: Chat | void;

  constructor($stateParams: ChatDetailParams, Chats: Chats) {
    this.chat = Chats.get(parseInt($stateParams.chatId));
  }
}

export class AccountCtrl {
  user: User;
  observer: any;
  $http: ng.IHttpService;
  ApiUrl: string;
  Data: Data;


  constructor($http: ng.IHttpService, ApiUrl: string, Data: Data) {
    Object.assign(this, {$http, ApiUrl, Data});
    this.user = angular.copy(this.Data.get('user'));
    this.observer = jsonpatch.observe(this.user);
  }

  save() {
    const patches = jsonpatch.generate(this.observer);
    if(patches.length > 0) {
      this.$http.patch(`${this.ApiUrl}/users/${this.user._id}`, patches).then(({data: user}) => {
        this.Data.set('user', user);
      });
    }
  }
}

interface Credential {
  email: string;
  password: string;
}

export class SigninCtrl {
  credentials: Credential;
  $http: ng.IHttpService;
  $state: ng.ui.IStateService;
  ApiUrl: string;
  Data: Data;
  error: boolean;

  constructor($http: ng.IHttpService, $state: ng.ui.IStateService, ApiUrl: string, Data: Data) {
    Object.assign(this, {
      $http, $state, ApiUrl, Data, error: '', credentials: {
        email: '', password: ''
      }
    });
  }

  go() {
    this.$http.post(`${this.ApiUrl}/session`, this.credentials)
      .then(response => {
        this.Data.set('user', response.data);
        this.$state.go('tab.dash');
      })
      .catch(err => (this.error = true, console.error(err)));
  }
}
