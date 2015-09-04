import {User} from 'schemas';

export interface Chat {
  id: number;
  name: string;
  lastText: string;
  face: string;
};

export class Chats {
  chats: Array<Chat>;

  constructor() {
    this.chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }];
  }

  all(): Array<Chat> {
    return this.chats;
  }

  remove(chat: Chat): void {
    this.chats.splice(this.chats.indexOf(chat), 1);
  }

  get(chatId: number): Chat | void {
    return this.chats.find(chat => chat.id === chatId);
  }
}

export class Data {
  private data: Map<string, any>;

  constructor() {
    this.data = new Map<string, any>();
  }

  set(key: string, val: any) {
    return this.data.set(key, val);
  }

  get(key: string) {
    return this.data.get(key);
  }

  has(key: string) {
    return this.data.has(key);
  }
}
