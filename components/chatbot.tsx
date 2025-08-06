'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, X, Send, Phone, Mail, User, Bot } from 'lucide-react'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
  options?: string[]
}

interface ChatbotProps {
  onClose?: () => void
}

const PREDEFINED_RESPONSES = {
  greeting: [
    "Hi there! 👋 I'm here to help you learn about our dispatch services. What would you like to know?",
    "Hello! Welcome to Dispatching.Pro. I can answer questions about our services, rates, and how we work. What interests you most?"
  ],
  services: [
    "We offer 3 main dispatch services:\n\n🚛 **BASIC** - Pay per load (load finding, rate negotiation, confirmation)\n🌟 **PREMIUM** - Full service with 24/7 support, paperwork handling, route optimization\n🏢 **CUSTOM** - Fleet solutions for 5+ trucks with dedicated dispatcher teams\n\nWhich service interests you most?"
  ],
  rates: [
    "Our clients typically see 15% higher rates compared to load boards! 💰\n\nWe achieve this through:\n• Exclusive broker relationships\n• Expert rate negotiation\n• Access to premium freight lanes\n• 24/7 load searching\n\nWould you like to know about our pricing structure?"
  ],
  pricing: [
    "Our pricing is simple and transparent once we figure out the level of service you want and how involved you want us to be in your operation. We would be happy to analyze your current situation and offer some suggestions.\n\nWhat you should expect is that we will fight to get you the top dollar for your hard work. We will work to increase your topline and make your bottom line soar!\n\n✅ No setup fees\n✅ No long-term contracts\n✅ You can leave anytime\n\nWant to know about equipment requirements?"
  ],
  equipment: [
    "We specialize in:\n\n🚛 **DRY VAN** - General freight, retail, e-commerce, manufacturing\n🧊 **REEFER** - Produce, pharmaceuticals, frozen goods, temperature-controlled\n\nWe handle both:\n🇺🇸 USA Interstate freight\n🇺🇸🇨🇦 Cross-border USA-Canada loads\n\nIf you run FLATBED or other type of specialized equipment, we can still help you out! There will be less dedicated freight and more open-board... but not to worry, if you will work on building a long-term relationship with us, we will work on finding long-term, dedicated freight for you!\n\nWhat type of equipment do you run?"
  ],
  howItWorks: [
    "Getting started is super easy! 🚀\n\n**STEP 1**: Contact us (call/text/WhatsApp)\n**STEP 2**: Quick 10-minute setup with your MC#, insurance, equipment details\n**STEP 3**: We start finding loads immediately\n**STEP 4**: You're rolling and making money!\n\n⏰ From first contact to first load: Usually 4-6 hours\n\nReady to get started?"
  ],
  support: [
    "We provide 24/7 support! 🕐\n\n✅ Round-the-clock dispatcher availability\n✅ Emergency breakdown assistance\n✅ Real-time load tracking\n✅ Problem resolution\n✅ Check calls and updates\n\nOur dispatchers never sleep - we're here when you need us most!"
  ],
  experience: [
    "Our team has years of experience! 👨‍💼\n\n✅ Specialized in Dry Van & Reefer freight\n✅ Expert knowledge of USA-Canada cross-border\n✅ Established relationships with 500+ brokers\n✅ Deep understanding of seasonal freight patterns\n✅ Proven track record of success\n\nWant to hear about our client success stories?"
  ],
  contact: [
    "Ready to boost your revenue? Let's connect! 📞\n\n**FASTEST**: Call/Text 647-362-6649\n**CONVENIENT**: WhatsApp 647-362-6649\n**DETAILED**: Email solutions@dispatching.pro\n\n🕐 Available 24/7 - seriously!\n\nI can help you get started right now. What works best for you?"
  ]
}

const QUICK_OPTIONS = [
  "What services do you offer?",
  "How much do you charge?",
  "What equipment do you handle?",
  "How does it work?",
  "Do you provide 24/7 support?",
  "How experienced is your team?",
  "I want to get started"
]

export default function Chatbot({ onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [conversationCount, setConversationCount] = useState(0)
  const [showContactPrompt, setShowContactPrompt] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Initial greeting
    const initialMessage: Message = {
      id: '1',
      text: PREDEFINED_RESPONSES.greeting[0],
      isBot: true,
      timestamp: new Date(),
      options: QUICK_OPTIONS.slice(0, 4)
    }
    setMessages([initialMessage])
  }, [])

  const addMessage = (text: string, isBot: boolean, options?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
      options
    }
    setMessages(prev => [...prev, newMessage])
  }

  const getBotResponse = (userInput: string): { text: string; options?: string[] } => {
    const input = userInput.toLowerCase()
    
    // Check for specific keywords and respond accordingly
    if (input.includes('service') || input.includes('what do you offer')) {
      return { text: PREDEFINED_RESPONSES.services[0], options: ['Tell me about pricing', 'What equipment do you handle?', 'How does it work?'] }
    }
    
    if (input.includes('rate') || input.includes('money') || input.includes('pay') || input.includes('revenue')) {
      return { text: PREDEFINED_RESPONSES.rates[0], options: ['What are your fees?', 'How does pricing work?', 'Tell me about equipment'] }
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('fee') || input.includes('charge')) {
      return { text: PREDEFINED_RESPONSES.pricing[0], options: ['What equipment do you handle?', 'How does it work?', 'I want to get started'] }
    }
    
    if (input.includes('equipment') || input.includes('truck') || input.includes('trailer') || input.includes('dry van') || input.includes('reefer')) {
      return { text: PREDEFINED_RESPONSES.equipment[0], options: ['How does it work?', 'Tell me about support', 'I want to get started'] }
    }
    
    if (input.includes('how') && (input.includes('work') || input.includes('start') || input.includes('process'))) {
      return { text: PREDEFINED_RESPONSES.howItWorks[0], options: ['What are your rates?', 'Tell me about support', 'I want to get started'] }
    }
    
    if (input.includes('support') || input.includes('help') || input.includes('24/7') || input.includes('available')) {
      return { text: PREDEFINED_RESPONSES.support[0], options: ['How experienced is your team?', 'What are your rates?', 'I want to get started'] }
    }
    
    if (input.includes('experience') || input.includes('team') || input.includes('qualified') || input.includes('expert')) {
      return { text: PREDEFINED_RESPONSES.experience[0], options: ['Tell me about rates', 'How does it work?', 'I want to get started'] }
    }
    
    if (input.includes('start') || input.includes('contact') || input.includes('call') || input.includes('ready')) {
      return { text: PREDEFINED_RESPONSES.contact[0] }
    }
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return { text: PREDEFINED_RESPONSES.greeting[1], options: QUICK_OPTIONS.slice(0, 4) }
    }
    
    // Default response with helpful options
    return { 
      text: "I'd be happy to help you with that! Here are some things I can tell you about:", 
      options: ['Our services', 'Pricing & rates', 'How it works', 'Get started now'] 
    }
  }

  const handleSendMessage = (messageText?: string) => {
    const text = messageText || inputValue.trim()
    if (!text) return

    // Add user message
    addMessage(text, false)
    setInputValue('')
    setIsTyping(true)
    setConversationCount(prev => prev + 1)

    // Simulate typing delay
    setTimeout(() => {
      const response = getBotResponse(text)
      addMessage(response.text, true, response.options)
      setIsTyping(false)

      // Show contact prompt after 3+ interactions
      if (conversationCount >= 2) {
        setTimeout(() => {
          setShowContactPrompt(true)
        }, 2000)
      }
    }, 1000 + Math.random() * 1000)
  }

  const handleOptionClick = (option: string) => {
    handleSendMessage(option)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <Card className="w-full max-w-md bg-gray-900 border-2 border-yellow-400 shadow-2xl">
      <div className="bg-yellow-400 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gray-900 rounded-full p-2">
            <Bot className="h-5 w-5 text-yellow-400" />
          </div>
          <div>
            <h3 className="font-black text-gray-900">Dispatch Assistant</h3>
            <p className="text-xs text-gray-700">Usually replies instantly</p>
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-gray-900 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <CardContent className="p-0">
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.isBot 
                  ? 'bg-gray-800 text-gray-300' 
                  : 'bg-yellow-400 text-gray-900'
              }`}>
                <div className="flex items-start space-x-2">
                  {message.isBot && (
                    <Bot className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    {message.options && (
                      <div className="mt-3 space-y-2">
                        {message.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="block w-full text-left px-3 py-2 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg max-w-xs">
                <div className="flex items-center space-x-2">
                  <Bot className="h-4 w-4 text-yellow-400" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showContactPrompt && (
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 rounded-lg">
              <h4 className="font-black text-gray-900 mb-2">Ready to Get Started? 🚀</h4>
              <p className="text-gray-800 text-sm mb-3">
                I've shared the basics, but our dispatch experts can give you personalized advice and get you rolling today!
              </p>
              <div className="space-y-2">
                <Button 
                  size="sm" 
                  className="w-full bg-gray-900 hover:bg-gray-800 text-yellow-400 font-bold"
                  onClick={() => window.open('tel:6473626649')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call 647-362-6649
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-yellow-400 font-bold bg-transparent"
                  onClick={() => window.open('https://wa.me/16473626649')}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-gray-700 p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your question..."
              className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400"
            />
            <Button 
              onClick={() => handleSendMessage()}
              size="sm"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
