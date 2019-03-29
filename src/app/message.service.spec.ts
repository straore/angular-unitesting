import { MessageService } from "./message.service";

describe('MessageService', () => {

    it('should have no messages at start ', () =>{

        let service = new MessageService();        
        expect(service.messages.length).toBe(0);

    })

    it('should add messages ', () =>{

        let service = new MessageService();
        service.add('coucou');
        expect(service.messages.length).toEqual(1);

    })

    it('should remove all messages when clear is invoked', () => {
        let service = new MessageService();
        service.add('bonjour');
        service.clear();
        expect(service.messages.length).toBe(0);
    })
})